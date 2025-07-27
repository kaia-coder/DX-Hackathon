// 카테고리 버튼 활성화
document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', function(){
    document.querySelectorAll('.category-btn').forEach(b=>b.classList.remove('active'));
    this.classList.add('active');
    // 여기서 지도 필터링 등 동작 추가 가능
  });
});

// 검색창 동작 (질문에서 제공한 코드 반영)
const searchInput = document.getElementById('main-search-input');
if (searchInput) {
  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') handleSearch();
  });
  const searchIcon = document.querySelector('.search-icon');
  if (searchIcon) {
    searchIcon.addEventListener('click', handleSearch);
  }
  function handleSearch() {
    const query = searchInput.value.trim();
    if (!query) return;
    fetch(`/api/search?q=${encodeURIComponent(query)}`)
      .then(res => res.json())
      .then(data => {
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