// JS/nav.js  (最小可用、純前端)
(function () {
  const nav = document.getElementById('nav');
  if (!nav) return;
  nav.innerHTML = [
    '<nav style="padding:8px 0; display:flex; gap:12px; flex-wrap:wrap;">',
      '<a href="members.html">成員 VC</a>',
      '<a href="rent.html">租約雜湊</a>',
      '<a href="anchor.html">T-Proof 錨定</a>',
      '<a href="payout_verify.html">撥款前核驗</a>',
         '<a href="verify.html">日誌驗鍊</a>',
    '</nav>',
    '<hr/>'
  ].join('');
})();
