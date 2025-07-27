// dxfront/main.js

// API URL 설정 (환경별 분기)
const isDevelopment =
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1';
const API_BASE_URL = isDevelopment
  ? 'http://localhost:8000/api'
  : 'https://sejong-festival-api.onrender.com/api';

// GitHub Pages 경로 설정
const isGitHubPages = window.location.hostname.includes('github.io');
const basePath = isGitHubPages ? '/DX-Hackathon' : '';

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

// API 호출 함수들
async function fetchFestivals() {
  try {
    console.log('🔄 축제 데이터 로딩 중...');
    const response = await fetch(`${API_BASE_URL}/festivals`);
    const festivals = await response.json();
    console.log('✅ 축제 데이터 로드 완료:', festivals);
    return festivals;
  } catch (error) {
    console.error('❌ 축제 데이터 로드 실패:', error);
    return [];
  }
}

async function fetchPlaces() {
  try {
    console.log('🔄 관광지 데이터 로딩 중...');
    const response = await fetch(`${API_BASE_URL}/places`);
    const places = await response.json();
    console.log('✅ 관광지 데이터 로드 완료:', places);
    return places;
  } catch (error) {
    console.error('❌ 관광지 데이터 로드 실패:', error);
    return [];
  }
}

async function searchAPI(query) {
  try {
    console.log('🔍 검색 중:', query);
    const response = await fetch(
      `${API_BASE_URL}/search?q=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    console.log('✅ 검색 결과:', data);
    return data;
  } catch (error) {
    console.error('❌ 검색 실패:', error);
    return null;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  // 1. 지도 색상/클릭
  document.querySelectorAll('#main-map path').forEach((path) => {
    path.setAttribute(
      'fill',
      FESTIVAL_REGION_IDS.includes(path.id) ? FESTIVAL_COLOR : BASE_COLOR
    );
    path.style.cursor = 'pointer';
    path.addEventListener('click', async () => {
      // 지역 클릭 시 해당 지역 데이터 로드
      const festivals = await fetchFestivals();
      const places = await fetchPlaces();
      console.log(`${path.id} 지역 데이터:`, { festivals, places });

      // GitHub Pages 경로 수정
      window.location.href = `${basePath}/map.html?region=${encodeURIComponent(
        path.id
      )}`;
    });

    path.onselectstart = () => false;
    path.onmousedown = (e) => e.preventDefault();
  });

  // 2. 검색창
  const searchInput = document.getElementById('main-search-input');
  if (searchInput) {
    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') handleSearch();
    });
    const searchIcon = document.querySelector('.search-icon');
    if (searchIcon) {
      searchIcon.addEventListener('click', handleSearch);
    }
    async function handleSearch() {
      const query = searchInput.value.trim();
      if (!query) return;

      const data = await searchAPI(query);
      if (data) {
        if (data.type === 'region' && data.key) {
          window.location.href = `${basePath}/map.html?region=${encodeURIComponent(
            data.key
          )}`;
        } else if ((data.type === 'cafe' || data.type === 'food') && data.key) {
          window.location.href = `${basePath}/map-list.html?type=${encodeURIComponent(
            data.type
          )}&name=${encodeURIComponent(data.key)}`;
        } else {
          alert('검색 결과가 없습니다.');
        }
      } else {
        alert('검색 중 오류가 발생했습니다.');
      }
    }
  }

  // 3. 포스터 표시
  const topBox = document.getElementById('festival-poster-top');
  const topImg = document.getElementById('poster-img-top');
  const botBox = document.getElementById('festival-poster-bottom');
  const botImg = document.getElementById('poster-img-bottom');
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

  // 4. 폭죽 마크 표시
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
