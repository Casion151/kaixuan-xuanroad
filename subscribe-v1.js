(() => {
  'use strict';
  const languages = ['zh', 'zh-Hant', 'en'];
  const languageKey = 'kaixuan-language';
  const picker = document.querySelector('.language-picker');
  const toggle = document.getElementById('language-toggle');
  const options = document.getElementById('language-options');
  const choices = [...options.querySelectorAll('[data-language-choice]')];
  const labels = {zh:'选择语言', 'zh-Hant':'選擇語言', en:'Choose language'};
  let language = 'zh';
  function readLanguage() {
    const requested = new URL(location.href).searchParams.get('lang');
    if (languages.includes(requested)) return requested;
    try {
      const stored = localStorage.getItem(languageKey);
      if (languages.includes(stored)) return stored;
    } catch (_) {}
    return 'zh';
  }
  function setOpen(open, restoreFocus = false) {
    options.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    if (open) choices.find(choice => choice.dataset.languageChoice === language)?.focus();
    else if (restoreFocus) toggle.focus();
  }
  function applyLanguage(next, updateUrl = false) {
    if (!languages.includes(next)) return;
    language = next;
    const key = next === 'zh-Hant' ? 'tw' : next;
    document.documentElement.lang = next === 'zh' ? 'zh-Hans' : next;
    document.documentElement.dataset.language = next;
    document.querySelectorAll('[data-zh]').forEach(node => { node.textContent = node.dataset[key]; });
    document.querySelectorAll('[data-href-zh]').forEach(node => { node.href = node.getAttribute(`data-href-${key}`); });
    document.querySelectorAll('[data-home-link]').forEach(node => { node.href = `./?lang=${next}`; });
    document.querySelectorAll('[data-aria-zh]').forEach(node => { node.setAttribute('aria-label', node.getAttribute(`data-aria-${key}`)); });
    choices.forEach(choice => choice.setAttribute('aria-pressed', String(choice.dataset.languageChoice === next)));
    toggle.setAttribute('aria-label', labels[next]);
    toggle.title = labels[next];
    options.setAttribute('aria-label', labels[next]);
    const title = {zh:'邮箱订阅 · 开玄 · 玄路', 'zh-Hant':'郵箱訂閱 · 開玄 · 玄路', en:'Email updates · KaiXuan · XuanRoad'};
    document.title = title[next];
    document.querySelector('meta[name="description"]').content = document.querySelector('.subscription-lead').textContent;
    try { localStorage.setItem(languageKey, next); } catch (_) {}
    if (updateUrl) {
      const url = new URL(location.href);
      url.searchParams.set('lang', next);
      history.replaceState(history.state, '', url);
    }
  }
  toggle.addEventListener('click', () => setOpen(options.hidden));
  choices.forEach(choice => choice.addEventListener('click', () => {
    applyLanguage(choice.dataset.languageChoice, true);
    setOpen(false, true);
  }));
  document.addEventListener('pointerdown', event => { if (!picker.contains(event.target)) setOpen(false); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !options.hidden) { event.preventDefault(); setOpen(false, true); }
  });
  picker.addEventListener('focusout', event => { if (event.relatedTarget && !picker.contains(event.relatedTarget)) setOpen(false); });
  window.addEventListener('popstate', () => { setOpen(false); applyLanguage(readLanguage()); });
  window.addEventListener('storage', event => {
    if (event.key === languageKey && languages.includes(event.newValue)) { setOpen(false); applyLanguage(event.newValue, true); }
  });
  applyLanguage(readLanguage());
})();
