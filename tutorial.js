(() => {
  'use strict';
  const reader = document.getElementById('reader');
  const toc = document.getElementById('toc-panel');
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
    document.getElementById('reading-label').textContent = `已读 ${progress}%`;
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
    return { id: heading.id, title: heading.textContent, text, searchable: normalize(text) };
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
    const matches = sections.filter(section => terms.every(term => section.searchable.includes(term)));
    status.textContent = matches.length ? `找到 ${matches.length} 个相关章节，选择结果跳转到正文。` : '没有找到相关章节。试试更短的词，或切换到资源地图、文献索引中查找。';
    results.hidden = !matches.length;
    for (const section of matches) {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = `#${section.id}`;
      const title = document.createElement('strong');
      appendHighlighted(title, section.title, terms);
      const firstHit = Math.min(...terms.map(term => section.searchable.indexOf(term)).filter(index => index >= 0));
      const start = Math.max(0, firstHit - 45);
      const end = Math.min(section.text.length, start + 190);
      const snippet = document.createElement('p');
      appendHighlighted(snippet, `${start ? '…' : ''}${section.text.slice(start, end)}${end < section.text.length ? '…' : ''}`, terms);
      link.append(title, snippet);
      link.addEventListener('click', () => {
        results.hidden = true;
        status.textContent = `已跳转：${section.title}。修改搜索词可以继续查找。`;
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
})();
