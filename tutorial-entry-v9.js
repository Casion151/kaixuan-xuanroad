/* Load synchronously in the tutorial <head> so external entries start on the map. */
(() => {
  'use strict';
  const current = new URL(window.location.href);
  const directory = new URL('./', current).pathname;
  const tutorialPath = /\/(?:tutorial|tutorial-map|tutorial-resources)\.html$/;
  const intentKey = 'kaixuan-tutorial-navigation-v9';
  const requestedAnchorKey = 'kaixuan-tutorial-requested-anchor-v9';
  const isTutorial = url => url.origin === current.origin && new URL('./', url).pathname === directory && tutorialPath.test(url.pathname);
  if (!isTutorial(current)) return;

  let intent = null;
  try {
    intent = JSON.parse(sessionStorage.getItem(intentKey) || 'null');
    sessionStorage.removeItem(intentKey);
  } catch (_) { /* Referrer and navigation type are enough without storage. */ }
  if (/\/tutorial-map\.html$/.test(current.pathname)) return;

  let internalReferrer = false;
  try { internalReferrer = !!document.referrer && isTutorial(new URL(document.referrer)); } catch (_) { /* No usable referrer. */ }
  let navigationType = '';
  try { navigationType = performance.getEntriesByType('navigation')[0]?.type || ''; } catch (_) { /* First entry is the safe default. */ }
  const returning = navigationType === 'reload' || navigationType === 'back_forward';
  let recentIntent = false;
  try {
    recentIntent = !document.referrer && intent && intent.origin === current.origin && intent.href === current.href
      && Date.now() - intent.at >= 0 && Date.now() - intent.at < 15000
      && typeof intent.source === 'string' && isTutorial(new URL(intent.source, current));
  } catch (_) { /* Ignore a stale or malformed navigation token. */ }
  if (internalReferrer || recentIntent || returning) return;

  // No saved "last view" can skip the map on a new external entry.
  try {
    if (current.hash) sessionStorage.setItem(requestedAnchorKey, JSON.stringify({
      origin: current.origin, pathname: current.pathname, hash: current.hash, at: Date.now(),
    }));
    else sessionStorage.removeItem(requestedAnchorKey);
  } catch (_) { /* The redirect still works when storage is unavailable. */ }
  const map = new URL('tutorial-map.html', current);
  map.search = current.search;
  // A guide/index chapter anchor belongs to that view, never to the map.
  map.hash = '';
  window.location.replace(map.href);
})();
