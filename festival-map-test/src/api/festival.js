// 예: 백엔드에서 축제 열리는 지역 id 배열을 내려받음
export async function fetchFestivalRegions() {
  // 실제로는 api 요청
  return ['조치원읍', '연기면']; // 예시
}

// 예: 지역 id => 포스터 이미지 경로 객체 반환
export async function fetchFestivalPosters() {
  return {
    '조치원읍': '/assets/images/poster-jocheon.jpg',
    '연기면': '/assets/images/poster-yeongi.jpg'
    // 필요시 추가
  };
}
