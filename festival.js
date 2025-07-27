// festival.js
window.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.carousel-track');
  const posters = document.querySelectorAll('.main-poster');
  if (!track || posters.length === 0) return;  // 요소가 없으면 종료

  let current = 0;
  let startX = 0;
  let deltaX = 0;
  let dragging = false;

  // 캐러셀 위치 갱신 함수
  function updateCarousel() {
    track.style.transform = `translateX(${-current * 100}vw)`;
  }

  // 터치 이벤트(모바일)
  track.addEventListener('touchstart', e => {
    if (e.touches.length !== 1) return;
    startX = e.touches[0].clientX;
    dragging = true;
  });
  track.addEventListener('touchmove', e => {
    if (!dragging || e.touches.length !== 1) return;
    deltaX = e.touches[0].clientX - startX;
  });
  track.addEventListener('touchend', e => {
    if (!dragging) return;
    if (deltaX < -50 && current < posters.length - 1) current++;
    else if (deltaX > 50 && current > 0) current--;
    updateCarousel();
    dragging = false;
    deltaX = 0;
  });

  // 마우스 이벤트(데스크톱)
  track.addEventListener('mousedown', e => {
    startX = e.clientX;
    dragging = true;
  });
  track.addEventListener('mousemove', e => {
    if (!dragging) return;
    deltaX = e.clientX - startX;
  });
  track.addEventListener('mouseup', e => {
    if (!dragging) return;
    if (deltaX < -50 && current < posters.length - 1) current++;
    else if (deltaX > 50 && current > 0) current--;
    updateCarousel();
    dragging = false;
    deltaX = 0;
  });
  // 마우스가 밖으로 나가면 멈추게
  track.addEventListener('mouseleave', e => {
    if (!dragging) return;
    dragging = false;
    deltaX = 0;
  });

  updateCarousel();
});
