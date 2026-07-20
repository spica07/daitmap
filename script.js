(function () {
  'use strict';

  var PAGE_SIZE = 6;
  var grid = document.querySelector('.grid');
  var pager = document.querySelector('.pager');
  if (!grid || !pager) return;

  var items = Array.prototype.slice.call(grid.children);
  var totalPages = Math.ceil(items.length / PAGE_SIZE);
  if (totalPages <= 1) return;

  var pagesEl = document.getElementById('pagerPages');
  var prevBtn = document.getElementById('pagerPrev');
  var nextBtn = document.getElementById('pagerNext');
  var statusEl = document.getElementById('pagerStatus');
  var current = 1;

  function goTo(page) {
    current = Math.min(totalPages, Math.max(1, page));
    render();
  }

  function render() {
    items.forEach(function (li, i) {
      var page = Math.floor(i / PAGE_SIZE) + 1;
      li.hidden = page !== current;
    });

    pagesEl.innerHTML = '';
    for (var p = 1; p <= totalPages; p++) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'pager__page';
      btn.textContent = String(p);
      btn.setAttribute('aria-label', p + '페이지로 이동');
      if (p === current) btn.setAttribute('aria-current', 'page');
      btn.addEventListener('click', (function (page) {
        return function () { goTo(page); };
      })(p));
      pagesEl.appendChild(btn);
    }

    prevBtn.disabled = current === 1;
    nextBtn.disabled = current === totalPages;
    statusEl.textContent = '전체 ' + totalPages + '페이지 중 ' + current + '페이지 표시 중';
  }

  prevBtn.addEventListener('click', function () { goTo(current - 1); });
  nextBtn.addEventListener('click', function () { goTo(current + 1); });

  pager.hidden = false;
  render();
})();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js').catch(function (err) {
      console.warn('서비스 워커 등록 실패:', err);
    });
  });
}
