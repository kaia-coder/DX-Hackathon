//scr/pages/MockHome.js
import Background from '../components/common/Background';
import SearchBar from '../components/common/SearchBar';
import BottomNav from '../components/common/BottomNav';
import logo from '../assets/nav/logo.svg';
import mapImg from '../assets/nav/map.svg';

export default function MockHome() {
  return (
    <Background>
      <div style={{ paddingTop: 32, paddingBottom: 84, minHeight: '100vh' }}>
        {/* 상단 로고 */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 24 // 검색창과 간격 확보
        }}>
          <img
            src={logo}
            alt="로고"
            style={{
              width: "280px",     // 검색창 넓이
              maxWidth: "96%",    // 화면 반응형 대응
              height: "auto"
            }}
          />
        </div>

        {/* 서치바 */}
        <div style={{ marginTop: 32 }}>
          <SearchBar />
        </div>

        {/* 지도 이미지 */}
        <div style={{
          margin: "60px 0 0 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <img
            src={mapImg}
            alt="세종 지도"
            style={{
              width: "92vw",             // 필요시 px로 조절
              maxWidth: 480,             // 최대 크기 제한
              height: "auto",
            }}
          />
        </div>
      </div>

      {/* 하단 네비게이션바 */}
      <BottomNav />
    </Background>
  );
}

