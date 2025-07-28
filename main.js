// dxfront/main.js

const FESTIVAL_REGION_IDS = ['jochiwon', 'center'];

const BASE_COLOR = '#B7DDF2',
  FESTIVAL_COLOR = '#FFEDB5';

const FESTIVAL_REGION_MARKS = [
  { id: 'jochiwon', top: 174, left: 195 },
  { id: 'center', top: 352, left: 186 },
  { id: 'jeondong', top: 85, left: 146 },
];

const festivalPosters = [
  { image: 'src/assets/nav/test.svg', position: 'top' },
  { image: 'src/assets/nav/test.svg', position: 'bottom' },
];

// API URL 설정 - 환경에 따라 동적 설정
function getApiBaseUrl() {
  // GitHub Pages 배포 환경 확인
  if (window.location.hostname.includes('github.io')) {
    // GitHub Pages에서는 Railway 배포된 API 사용
    return 'https://sejong-festival-api.onrender.com';
  } else if (
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1'
  ) {
    // 로컬 개발 환경
    return 'http://localhost:8000';
  } else {
    // 기타 환경 (Railway 등)
    return 'https://sejong-festival-api.onrender.com';
  }
}

const API_BASE_URL = getApiBaseUrl();
console.log(`🌐 API Base URL: ${API_BASE_URL}`);

window.addEventListener('DOMContentLoaded', () => {
  // 1. 지도 색상/클릭 (메인 페이지에만 존재하는 요소들)
  const mainMapPaths = document.querySelectorAll('#main-map path');
  if (mainMapPaths.length > 0) {
    mainMapPaths.forEach((path) => {
      path.setAttribute(
        'fill',
        FESTIVAL_REGION_IDS.includes(path.id) ? FESTIVAL_COLOR : BASE_COLOR
      );
      path.style.cursor = 'pointer';
      path.addEventListener('click', () => {
        window.location.href = `./map.html?region=${encodeURIComponent(
          path.id
        )}`;
      });

      path.onselectstart = () => false;
      path.onmousedown = (e) => e.preventDefault();
    });
  }

  // 2. 검색창 (메인 페이지에만 존재하는 요소들)
  const searchInput = document.getElementById('main-search-input');
  if (searchInput) {
    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') handleSearch();
    });
    const searchIcon = document.querySelector('.search-icon');
    if (searchIcon) {
      searchIcon.addEventListener('click', handleSearch);
    }
    function handleSearch() {
      const query = searchInput.value.trim();
      if (!query) return;
      fetch(`${API_BASE_URL}/api/search?q=${encodeURIComponent(query)}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.type === 'region' && data.key) {
            window.location.href = `./map.html?region=${encodeURIComponent(
              data.key
            )}`;
          } else if (
            (data.type === 'cafe' || data.type === 'food') &&
            data.key
          ) {
            window.location.href = `./map-list.html?type=${encodeURIComponent(
              data.type
            )}&name=${encodeURIComponent(data.key)}`;
          } else {
            alert('검색 결과가 없습니다.');
          }
        })
        .catch((err) => {
          console.error('검색 오류:', err);
          alert('검색 중 오류가 발생했습니다.');
        });
    }
  }

  // 3. 포스터 표시 (메인 페이지에만 존재하는 요소들)
  const topBox = document.getElementById('festival-poster-top');
  const topImg = document.getElementById('poster-img-top');
  const botBox = document.getElementById('festival-poster-bottom');
  const botImg = document.getElementById('poster-img-bottom');

  if (topBox && topImg && botBox && botImg) {
    topBox.style.display = 'none';
    botBox.style.display = 'none';
    topImg.style.display = 'none';
    botImg.style.display = 'none';
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
  }

  // 4. 폭죽 마크 표시 (메인 페이지에만 존재하는 요소들)
  const marksLayer = document.getElementById('firework-marks-layer');
  if (marksLayer) {
    marksLayer.innerHTML = '';
    FESTIVAL_REGION_MARKS.forEach((region) => {
      // ★ FESTIVAL_REGION_IDS(축제가 실제 열리는 지역)만 표시
      if (!FESTIVAL_REGION_IDS.includes(region.id)) return;
      const img = document.createElement('img');
      img.src = 'assets/nav/firework.svg';
      img.alt = `${region.id} 폭죽마크`;
      img.style.position = 'absolute';
      img.style.top =
        typeof region.top === 'number' ? region.top + 'px' : region.top;
      img.style.left =
        typeof region.left === 'number' ? region.left + 'px' : region.left;
      img.style.pointerEvents = 'none';
      img.style.zIndex = 30;
      img.style.width = '48px';
      img.style.height = '48px';
      marksLayer.appendChild(img);
    });
  }
});
