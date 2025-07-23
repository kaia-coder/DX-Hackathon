import Background from '../components/common/Background';
import SearchBar from '../components/common/SearchBar';
import BottomNav from '../components/common/BottomNav';

import mapImg from '../assets/nav/map.svg';

export default function MockHome() {
  return (
    <Background>
      <div style={{ paddingTop: 32, paddingBottom: 84, minHeight: '100vh' }}>
        {/* 서치바 */}
        <SearchBar />

        {/* 가운데 임시 텍스트 */}
        <div style={{ margin: "60px 0 0 0", textAlign: "center", color: "#222", fontWeight: 600 }}>
          App name? Hmm..
        </div>

        {/* 지도 이미지 삽입 */}
        <div style={{ margin: "40px 0", display: "flex", justifyContent: "center" }}>
          <img src={mapImg} alt="세종 지도" style={{ width: "80%", maxWidth: 340, height: "auto" }} />
        </div>
      </div>

      {/* 하단 네비게이션바 */}
      <BottomNav />
    </Background>
  );
}

