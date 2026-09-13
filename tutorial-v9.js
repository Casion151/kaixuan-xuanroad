(() => {
  'use strict';
  const languages = ['zh', 'zh-Hant', 'en'];
  const htmlLanguages = { zh: 'zh-Hans', 'zh-Hant': 'zh-Hant', en: 'en' };
  const languageKey = 'kaixuan-language';
  const reader = document.getElementById('reader');
  const toc = document.getElementById('toc-panel');
  const isResourceMap = /\/tutorial-map\.html$/.test(window.location.pathname);
  const navigationIntentKey = 'kaixuan-tutorial-navigation-v9';
  const requestedAnchorKey = 'kaixuan-tutorial-requested-anchor-v9';
  const tutorialDirectory = new URL('./', window.location.href).pathname;
  const picker = document.querySelector('.language-picker');
  const pickerToggle = document.getElementById('language-toggle');
  const pickerOptions = document.getElementById('language-options');
  const choices = [...pickerOptions.querySelectorAll('[data-language-choice]')];
  const ui = {
    zh: {
      read: progress => `已读 ${progress}%`,
      found: count => `找到 ${count} 个相关章节，选择结果跳转到正文。`,
      empty: '没有找到相关章节。试试更短的词，或切换到资源地图、文献索引中查找。',
      jumped: title => `已跳转：${title}。修改搜索词可以继续查找。`,
      choose: '选择语言',
    },
    'zh-Hant': {
      read: progress => `已讀 ${progress}%`,
      found: count => `找到 ${count} 個相關章節，選擇結果跳轉到正文。`,
      empty: '沒有找到相關章節。試試更短的詞，或切換到資源地圖、文獻索引中查找。',
      jumped: title => `已跳轉：${title}。修改搜索詞可以繼續查找。`,
      choose: '選擇語言',
    },
    en: {
      read: progress => `${progress}% read`,
      found: count => `${count} matching section${count === 1 ? '' : 's'}. Select a result to jump to the article.`,
      empty: 'No matching sections. Try a shorter term, or search the resource map or reading index.',
      jumped: title => `Jumped to: ${title}. Edit your search to keep looking.`,
      choose: 'Select language',
    },
  };

  function readLanguage() {
    const query = new URLSearchParams(window.location.search).get('lang');
    if (languages.includes(query)) return query;
    try {
      const saved = localStorage.getItem(languageKey);
      if (languages.includes(saved)) return saved;
    } catch (_) { /* The URL and picker work without browser storage. */ }
    return 'zh';
  }
  let language = readLanguage();
  const mobile = window.matchMedia('(max-width: 800px)');
  const syncToc = () => { toc.open = !mobile.matches; };
  syncToc();
  mobile.addEventListener('change', syncToc);
  document.querySelectorAll('[data-toc]').forEach(link => {
    link.addEventListener('click', () => { if (mobile.matches) toc.open = false; });
  });

  const headings = [...reader.querySelectorAll('h2, h3')];
  const tocLinks = new Map([...document.querySelectorAll('[data-toc]')].map(link => [decodeURIComponent(link.hash.slice(1)), link]));
  let currentLink = null;
  let scheduled = false;
  function updateReading() {
    scheduled = false;
    const rect = reader.getBoundingClientRect();
    const readingSpace = Math.max(1, reader.scrollHeight - window.innerHeight + 130);
    const progress = Math.max(0, Math.min(100, Math.round((130 - rect.top) / readingSpace * 100)));
    document.getElementById('reading-progress').style.width = `${progress}%`;
    document.getElementById('reading-label').textContent = ui[language].read(progress);
    let active = null;
    for (const heading of headings) {
      if (heading.getBoundingClientRect().top <= 165) active = heading;
      else break;
    }
    const nextLink = active ? tocLinks.get(active.id) : null;
    if (currentLink !== nextLink) {
      currentLink?.removeAttribute('aria-current');
      nextLink?.setAttribute('aria-current', 'location');
      currentLink = nextLink;
      if (nextLink && !mobile.matches) {
        const nav = nextLink.closest('.toc-nav');
        const top = nextLink.offsetTop;
        if (top < nav.scrollTop || top + nextLink.offsetHeight > nav.scrollTop + nav.clientHeight) nav.scrollTop = Math.max(0, top - nav.clientHeight / 3);
      }
    }
  }
  function scheduleReading() {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateReading); }
  }
  window.addEventListener('scroll', scheduleReading, { passive: true });
  window.addEventListener('resize', scheduleReading);
  window.addEventListener('load', scheduleReading);

  const form = document.getElementById('search-form');
  const input = document.getElementById('section-search');
  const results = document.getElementById('search-results');
  const status = document.getElementById('search-status');
  const clear = document.getElementById('clear-search');
  const compact = text => text.replace(/\s+/g, ' ').trim();
  const escapeRegex = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  let sections = [];
  function rebuildSearchIndex() {
    sections = [...reader.querySelectorAll('.reader-section')].map(section => {
      const heading = section.querySelector('h1, h2');
      const label = tocLinks.get(heading.id);
      return {
        id: heading.id,
        title: compact(label ? label.textContent : heading.textContent),
        titleLanguage: label ? htmlLanguages[language] : reader.lang,
        text: compact(section.textContent),
      };
    });
  }
  function appendHighlighted(parent, text, terms) {
    const expression = new RegExp(`(${terms.map(escapeRegex).join('|')})`, 'giu');
    let offset = 0;
    for (const match of text.matchAll(expression)) {
      parent.append(document.createTextNode(text.slice(offset, match.index)));
      const mark = document.createElement('mark');
      mark.textContent = match[0];
      parent.append(mark);
      offset = match.index + match[0].length;
    }
    parent.append(document.createTextNode(text.slice(offset)));
  }
  function search() {
    const query = compact(input.value);
    clear.hidden = !query;
    results.replaceChildren();
    if (!query) { results.hidden = true; status.textContent = ''; return; }
    const terms = [...new Set(query.split(' '))];
    // Match against the actual display string so Unicode case folding never
    // shifts snippet positions away from the highlighted text.
    const expressions = terms.map(term => new RegExp(escapeRegex(term), 'iu'));
    const matches = sections.filter(section => expressions.every(expression => expression.test(section.text) || expression.test(section.title)));
    status.textContent = matches.length ? ui[language].found(matches.length) : ui[language].empty;
    results.hidden = !matches.length;
    for (const section of matches) {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = `#${section.id}`;
      const title = document.createElement('strong');
      title.lang = section.titleLanguage;
      appendHighlighted(title, section.title, terms);
      const bodyHits = expressions.map(expression => expression.exec(section.text)?.index).filter(index => index !== undefined);
      const firstHit = bodyHits.length ? Math.min(...bodyHits) : 0;
      const start = Math.max(0, firstHit - 45);
      const end = Math.min(section.text.length, start + 190);
      const snippet = document.createElement('p');
      snippet.lang = reader.lang;
      appendHighlighted(snippet, `${start ? '…' : ''}${section.text.slice(start, end)}${end < section.text.length ? '…' : ''}`, terms);
      link.append(title, snippet);
      link.addEventListener('click', () => {
        results.hidden = true;
        status.textContent = ui[language].jumped(section.title);
        if (mobile.matches) toc.open = false;
        requestAnimationFrame(() => document.getElementById(section.id)?.focus({ preventScroll: true }));
      });
      li.append(link);
      results.append(li);
    }
  }
  let searchTimer;
  input.addEventListener('input', () => { clearTimeout(searchTimer); searchTimer = setTimeout(search, 120); });
  form.addEventListener('submit', event => { event.preventDefault(); clearTimeout(searchTimer); search(); });
  form.addEventListener('reset', () => {
    clearTimeout(searchTimer);
    input.value = '';
    search();
    input.focus();
  });

  const navigationLinks = [...document.querySelectorAll('a[href]')].filter(link => {
    const href = link.getAttribute('href');
    if (link.hasAttribute('download') || href.startsWith('#')) return false;
    const url = new URL(href, window.location.href);
    return url.origin === window.location.origin && (/\/$/.test(url.pathname) || /\/(?:index|tutorial|tutorial-map|tutorial-resources)\.html$/.test(url.pathname));
  }).map(link => ({ link, href: link.getAttribute('href') }));
  function isTutorialUrl(url) {
    return url.origin === window.location.origin && new URL('./', url).pathname === tutorialDirectory && /\/(?:tutorial|tutorial-map|tutorial-resources)\.html$/.test(url.pathname);
  }
  function updateNavigation() {
    for (const { link, href } of navigationLinks) {
      const url = new URL(href, window.location.href);
      if (isTutorialUrl(url)) {
        // Carry existing query context between views; a link's own values win.
        const explicitKeys = new Set(url.searchParams.keys());
        for (const [key, value] of new URL(window.location.href).searchParams) {
          if (!explicitKeys.has(key)) url.searchParams.append(key, value);
        }
      }
      url.searchParams.set('lang', language);
      link.setAttribute('href', url.pathname + url.search + url.hash);
    }
  }
  document.addEventListener('click', event => {
    const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
    if (!link || link.hasAttribute('download') || link.getAttribute('href').startsWith('#')) return;
    const url = new URL(link.href, window.location.href);
    if (!isTutorialUrl(url)) return;
    const here = new URL(window.location.href);
    if (url.pathname === here.pathname && url.search === here.search) return;
    try {
      const pending = JSON.parse(sessionStorage.getItem(requestedAnchorKey) || 'null');
      // A deep link is restored only after an explicit choice of that view.
      if (pending && pending.origin === url.origin && pending.pathname === url.pathname && Date.now() - pending.at >= 0 && Date.now() - pending.at < 300000 && !url.hash) {
        url.hash = pending.hash;
        link.href = url.pathname + url.search + url.hash;
        sessionStorage.removeItem(requestedAnchorKey);
      }
      sessionStorage.setItem(navigationIntentKey, JSON.stringify({
        origin: url.origin, pathname: url.pathname, href: url.href, source: window.location.pathname, at: Date.now(),
      }));
    } catch (_) { /* Same-directory referrers still support internal navigation. */ }
  }, { capture: true });
  function updateDownloads() {
    const key = language === 'en' ? 'en' : 'zh';
    document.querySelectorAll('a[data-download-zh]').forEach(link => {
      const href = link.getAttribute(`data-download-${key}`) || link.getAttribute('data-download-zh');
      const filename = link.getAttribute(`data-download-name-${key}`) || link.getAttribute('data-download-name-zh');
      if (href) link.setAttribute('href', href);
      if (filename) link.setAttribute('download', filename);
    });
  }
  function setPickerOpen(open, restoreFocus = false) {
    pickerOptions.hidden = !open;
    pickerToggle.setAttribute('aria-expanded', String(open));
    if (open) choices.find(choice => choice.dataset.languageChoice === language)?.focus();
    else if (restoreFocus) pickerToggle.focus();
  }
  function applyLanguage(nextLanguage, updateUrl = false) {
    if (!languages.includes(nextLanguage)) return;
    const readingAnchor = language !== nextLanguage && window.scrollY > 200
      ? [...headings].reverse().find(heading => heading.getBoundingClientRect().top <= 165)
      : null;
    const anchorTop = readingAnchor?.getBoundingClientRect().top;
    language = nextLanguage;
    const pageLang = htmlLanguages[language];
    const attributeKey = language === 'zh-Hant' ? 'tw' : language;
    document.documentElement.lang = pageLang;
    document.documentElement.dataset.language = language;
    reader.lang = isResourceMap ? 'en' : pageLang;
    document.querySelectorAll('[data-zh]').forEach(element => {
      if (element.closest('[data-fixed-language="en"]')) return;
      element.textContent = element.dataset[attributeKey] ?? element.dataset.zh;
    });
    document.querySelectorAll('[data-aria-zh]').forEach(element => {
      const key = language === 'zh-Hant' ? 'ariaTw' : language === 'en' ? 'ariaEn' : 'ariaZh';
      element.setAttribute('aria-label', element.dataset[key] ?? element.dataset.ariaZh);
    });
    document.querySelectorAll('[data-placeholder-zh]').forEach(element => {
      const key = language === 'zh-Hant' ? 'placeholderTw' : language === 'en' ? 'placeholderEn' : 'placeholderZh';
      element.placeholder = element.dataset[key] ?? element.dataset.placeholderZh;
    });
    document.querySelectorAll('[data-show-lang]').forEach(element => { element.hidden = !element.dataset.showLang.split(' ').includes(language); });
    document.querySelectorAll('[data-interface-language]').forEach(element => {
      if (!element.closest('[data-fixed-language]')) element.lang = pageLang;
    });
    document.querySelectorAll('[data-fixed-language]').forEach(element => { element.lang = element.dataset.fixedLanguage; });
    choices.forEach(choice => choice.setAttribute('aria-pressed', String(choice.dataset.languageChoice === language)));
    pickerToggle.dataset.language = language;
    pickerToggle.setAttribute('aria-label', ui[language].choose);
    pickerToggle.title = ui[language].choose;
    pickerOptions.setAttribute('aria-label', ui[language].choose);
    const titleKey = language === 'zh-Hant' ? 'pageTitleTw' : language === 'en' ? 'pageTitleEn' : 'pageTitleZh';
    const siteTitle = language === 'en' ? 'KaiXuan · XuanRoad' : language === 'zh-Hant' ? '開玄 · 玄路' : '开玄 · 玄路';
    document.title = `${document.body.dataset[titleKey]} · ${siteTitle}`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = document.querySelector('.hero-lead').textContent;
    try { localStorage.setItem(languageKey, language); } catch (_) { /* Selection also persists in navigation URLs. */ }
    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', language);
      window.history.replaceState(window.history.state, '', url);
    }
    updateNavigation();
    updateDownloads();
    rebuildSearchIndex();
    updateReading();
    if (input.value.trim()) search();
    if (readingAnchor) requestAnimationFrame(() => {
      window.scrollBy({ top: readingAnchor.getBoundingClientRect().top - anchorTop, behavior: 'instant' });
      scheduleReading();
    });
  }
  pickerToggle.addEventListener('click', () => setPickerOpen(pickerOptions.hidden));
  choices.forEach(choice => choice.addEventListener('click', () => {
    applyLanguage(choice.dataset.languageChoice, true);
    setPickerOpen(false, true);
  }));
  document.addEventListener('pointerdown', event => { if (!picker.contains(event.target)) setPickerOpen(false); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !pickerOptions.hidden) { event.preventDefault(); setPickerOpen(false, true); }
  });
  picker.addEventListener('focusout', event => { if (event.relatedTarget && !picker.contains(event.relatedTarget)) setPickerOpen(false); });
  window.addEventListener('popstate', () => { setPickerOpen(false); applyLanguage(readLanguage()); });
  window.addEventListener('storage', event => {
    if (event.key === languageKey && languages.includes(event.newValue)) { setPickerOpen(false); applyLanguage(event.newValue, true); }
  });
  applyLanguage(language);
  document.fonts?.ready.then(scheduleReading);
})();
