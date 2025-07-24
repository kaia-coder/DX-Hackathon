// src/festival.js

document.addEventListener('DOMContentLoaded', function() {
  // 페이지가 로드될 때 동적으로 데이터가 없을 경우 안내 메시지 삽입
  const festivalList = document.querySelector('.festival-list');
  if (festivalList.children.length === 0) {
    const empty = document.createElement('div');
    empty.textContent = '곧 공개될 축제정보가 없습니다.';
    empty.style.color = '#7f7f7f';
    empty.style.textAlign = 'center';
    empty.style.padding = '24px 0';
    festivalList.appendChild(empty);
  }

  const eventList = document.querySelector('.event-list');
  if (eventList.children.length === 0) {
    const empty = document.createElement('div');
    empty.textContent = '곧 공개될 공연·전시 정보가 없습니다.';
    empty.style.color = '#7f7f7f';
    empty.style.textAlign = 'center';
    empty.style.padding = '24px 0';
    eventList.appendChild(empty);
  }
});
