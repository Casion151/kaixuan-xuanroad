(() => {
  'use strict';
  const reader = document.getElementById('reader');
  const toc = document.getElementById('toc-panel');
  const languageKey = 'kaixuan-language';
  let language = 'zh';
  try {
    const queryLanguage = new URLSearchParams(window.location.search).get('lang');
    const savedLanguage = localStorage.getItem(languageKey);
    language = ['zh', 'en'].includes(queryLanguage) ? queryLanguage : (['zh', 'en'].includes(savedLanguage) ? savedLanguage : 'zh');
  } catch (_) {
    const queryLanguage = new URLSearchParams(window.location.search).get('lang');
    if (['zh', 'en'].includes(queryLanguage)) language = queryLanguage;
  }
  const ui = {
    zh: {
      read: progress => `已读 ${progress}%`,
      found: count => `找到 ${count} 个相关章节，选择结果跳转到正文。`,
      empty: '没有找到相关章节。试试更短的词，或切换到资源地图、文献索引中查找。',
      jumped: title => `已跳转：${title}。修改搜索词可以继续查找。`,
      toggle: '切换到英文',
    },
    en: {
      read: progress => `${progress}% read`,
      found: count => `${count} matching section${count === 1 ? '' : 's'}. Select a result to jump to the article.`,
      empty: 'No matching sections. Try a shorter term, or search the resource map or reading index.',
      jumped: title => `Jumped to: ${title}. Edit your search to keep looking.`,
      toggle: 'Switch to Chinese',
    },
  };
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
        if (top < nav.scrollTop || top + nextLink.offsetHeight > nav.scrollTop + nav.clientHeight) {
          nav.scrollTop = Math.max(0, top - nav.clientHeight / 3);
        }
      }
    }
  }
  function scheduleReading() {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateReading); }
  }
  window.addEventListener('scroll', scheduleReading, { passive: true });
  window.addEventListener('resize', scheduleReading);
  window.addEventListener('load', scheduleReading);
  updateReading();

  const form = document.getElementById('search-form');
  const input = document.getElementById('section-search');
  const results = document.getElementById('search-results');
  const status = document.getElementById('search-status');
  const clear = document.getElementById('clear-search');
  const normalize = text => text.toLocaleLowerCase().replace(/\s+/g, ' ').trim();
  const sections = [...reader.querySelectorAll('.reader-section')].map(section => {
    const heading = section.querySelector('h1, h2');
    const text = section.textContent.replace(/\s+/g, ' ').trim();
    const label = tocLinks.get(heading.id)?.querySelector('[data-zh]');
    return { id: heading.id, title: heading.textContent, labels: label ? { zh: label.dataset.zh, en: label.dataset.en } : null, text, searchable: normalize(text) };
  });
  const escapeRegex = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
    const query = normalize(input.value);
    clear.hidden = !query;
    results.replaceChildren();
    if (!query) { results.hidden = true; status.textContent = ''; return; }
    const terms = [...new Set(query.split(' '))];
    const matches = sections.filter(section => terms.every(term => `${section.searchable} ${normalize(section.labels?.[language] || '')}`.includes(term)));
    status.textContent = matches.length ? ui[language].found(matches.length) : ui[language].empty;
    results.hidden = !matches.length;
    for (const section of matches) {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = `#${section.id}`;
      const title = document.createElement('strong');
      const displayTitle = section.labels?.[language] || section.title;
      title.lang = section.labels ? (language === 'zh' ? 'zh-CN' : 'en') : reader.lang;
      appendHighlighted(title, displayTitle, terms);
      const bodyHits = terms.map(term => section.searchable.indexOf(term)).filter(index => index >= 0);
      const firstHit = bodyHits.length ? Math.min(...bodyHits) : 0;
      const start = Math.max(0, firstHit - 45);
      const end = Math.min(section.text.length, start + 190);
      const snippet = document.createElement('p');
      snippet.lang = reader.lang;
      appendHighlighted(snippet, `${start ? '…' : ''}${section.text.slice(start, end)}${end < section.text.length ? '…' : ''}`, terms);
      link.append(title, snippet);
      link.addEventListener('click', () => {
        results.hidden = true;
        status.textContent = ui[language].jumped(displayTitle);
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

  function applyLanguage(nextLanguage, updateUrl = false) {
    language = nextLanguage;
    const pageLang = language === 'zh' ? 'zh-CN' : 'en';
    document.documentElement.lang = pageLang;
    document.documentElement.dataset.language = language;
    document.querySelectorAll('[data-zh][data-en]').forEach(element => {
      element.textContent = element.dataset[language];
    });
    document.querySelectorAll('[data-aria-zh][data-aria-en]').forEach(element => {
      element.setAttribute('aria-label', element.dataset[language === 'zh' ? 'ariaZh' : 'ariaEn']);
    });
    document.querySelectorAll('[data-placeholder-zh][data-placeholder-en]').forEach(element => {
      element.placeholder = element.dataset[language === 'zh' ? 'placeholderZh' : 'placeholderEn'];
    });
    document.querySelectorAll('[data-show-lang]').forEach(element => { element.hidden = element.dataset.showLang !== language; });
    document.querySelectorAll('[data-interface-language]').forEach(element => { element.lang = pageLang; });
    const button = document.getElementById('language-toggle');
    button.dataset.language = language;
    button.setAttribute('aria-label', ui[language].toggle);
    button.title = ui[language].toggle;
    const pageTitle = document.body.dataset[language === 'zh' ? 'pageTitleZh' : 'pageTitleEn'];
    document.title = `${pageTitle} · ${language === 'zh' ? '开玄 · 玄路' : 'KaiXuan · XuanRoad'}`;
    try { localStorage.setItem(languageKey, language); } catch (_) { /* Still works when storage is unavailable. */ }
    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', language);
      window.history.replaceState(null, '', url);
    }
    updateReading();
    if (input.value.trim()) search();
  }
  document.getElementById('language-toggle').addEventListener('click', () => applyLanguage(language === 'zh' ? 'en' : 'zh', true));
  window.addEventListener('storage', event => {
    if (event.key === languageKey && ['zh', 'en'].includes(event.newValue)) applyLanguage(event.newValue, true);
  });
  applyLanguage(language);
  document.fonts?.ready.then(scheduleReading);
})();
