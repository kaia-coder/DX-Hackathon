// dxfront/main.js

// ========== 지도 축제색상 & 지역 클릭 이벤트 ==========
const FESTIVAL_REGIONS = ['jochiwon', 'center'];
const BASE_COLOR = '#B7DDF2', FESTIVAL_COLOR = '#FFEDB5';

window.addEventListener('DOMContentLoaded', () => {
  // --- 1) SVG 지도 각 지역 색상/클릭/접근성
  document.querySelectorAll('#main-map path').forEach(path => {
    // 색칠
    path.setAttribute(
      'fill',
      FESTIVAL_REGIONS.includes(path.id) ? FESTIVAL_COLOR : BASE_COLOR
    );
    path.style.cursor = 'pointer';

    // 클릭 → 상세페이지 이동
    path.addEventListener('click', () => {
      window.location.href = `/region-detail.html?region=${encodeURIComponent(path.id)}`;
    });

    // 키보드(엔터/스페이스) 접근
    path.setAttribute('tabindex', 0);
    path.setAttribute('role', 'button');
    path.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        window.location.href = `/region-detail.html?region=${encodeURIComponent(path.id)}`;
      }
    });

    // 드래그/선택차단 (선택영역·하이라이트 방지)
    path.onselectstart = () => false;
    path.onmousedown = e => e.preventDefault();
  });

  // --- 2) 검색창: 엔터/돋보기 클릭 모두 검색
  const searchInput = document.getElementById('main-search-input');
  if (searchInput) {
    // 엔터검색
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') handleSearch();
    });
    // 돋보기 클릭검색
    const searchIcon = document.querySelector('.search-icon');
    if (searchIcon) {
      searchIcon.addEventListener('click', handleSearch);
    }
    function handleSearch() {
      const query = searchInput.value.trim();
      if (!query) return;
      // ⚡️ 백엔드 검색 API 호출
      fetch(`/api/search?q=${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(data => {
          // 예: {type: "region", key: "jochiwon"}
          if (data.type === "region" && data.key) {
            window.location.href = `/region-detail.html?region=${encodeURIComponent(data.key)}`;
          } else if ((data.type === "cafe" || data.type === "food") && data.key) {
            window.location.href = `/map-list.html?type=${encodeURIComponent(data.type)}&name=${encodeURIComponent(data.key)}`;
          } else {
            alert("검색 결과가 없습니다.");
          }
        })
        .catch(err => {
          alert("검색 중 오류가 발생했습니다.");
        });
    }
  }

  // 3) 축제 포스터 표시 (테스트 하드코딩)
const festivalPosters = [
  {
    image: 'src/assets/nav/test.svg',
    position: 'top'
  },
  {
    image: 'src/assets/nav/test.svg',
    position: 'bottom'
  }
];

// 요소 참조
const topBox = document.getElementById('festival-poster-top');
const topImg = document.getElementById('poster-img-top');
const botBox = document.getElementById('festival-poster-bottom');
const botImg = document.getElementById('poster-img-bottom');

// 모두 숨김 초기화
topBox.style.display = 'none';
botBox.style.display = 'none';
topImg.style.display = 'none';
botImg.style.display = 'none';

// 데이터에 따라 노출
festivalPosters.forEach((poster) => {
  if (poster.position === 'top' && poster.image) {
    topImg.src = poster.image;
    topImg.style.display = 'block';
    topBox.style.display = '';
  }
  if (poster.position === 'bottom' && poster.image) {
    botImg.src = poster.image;
    botImg.style.display = 'block';
    botBox.style.display = '';
  }
});

});
