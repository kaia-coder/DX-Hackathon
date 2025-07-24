// src/pages/MockHome.js
import React, { useRef, useEffect } from 'react';
import Background from '../components/common/Background';
import SearchBar from '../components/common/SearchBar';
import BottomNav from '../components/common/BottomNav';
import logo from '../assets/nav/logo.svg';
import mark from '../assets/nav/mark.svg';  // 지도 위에 오버레이로 씌울 마크
import topArrow from '../assets/nav/top.svg';
import bottomArrow from '../assets/nav/bottom.svg';
import { ReactComponent as MapSVG } from '../assets/nav/map.svg';
import '../styles/common/mapover.css';

// 축제가 열리는 지역 목록(API 등으로 동적으로 받아올 수도 있음)
const FESTIVAL_REGIONS = ['jochiwon', 'center'];
const BASE_COLOR = '#B7DDF2';
const FESTIVAL_COLOR = '#FFEDB5';

// 지역별로 색칠해주는 컴포넌트
function DynamicMap({ festivalRegions, style }) {
  const svgRef = useRef();

  useEffect(() => {
    if (svgRef.current) {
      svgRef.current.querySelectorAll('path').forEach(path => {
        const fillColor = festivalRegions.includes(path.id)
          ? FESTIVAL_COLOR
          : BASE_COLOR;
        path.setAttribute('fill', fillColor);
      });
    }
  }, [festivalRegions]);

  return (
    <MapSVG
      ref={svgRef}
      style={style}
    />
  );
}

export default function MockHome() {
  return (
    <Background>
      <div
        style={{
          position: 'relative',
          minHeight: '100vh',
          paddingTop: 32,
          paddingBottom: 84,
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >
        {/* 상단 로고 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 24,
          }}
        >
          <img
            src={logo}
            alt="로고"
            style={{
              width: '270px',
              maxWidth: '90%',
              height: 'auto',
            }}
          />
        </div>

        {/* 검색창 */}
        <div style={{ marginTop: 32 }}>
          <SearchBar />
        </div>

        {/* 지도+마크 오버레이 (중앙정렬, 마크가 지도 위에 딱 겹침) */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: 480,
            height: 585,
            margin: '64px 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <DynamicMap
            festivalRegions={FESTIVAL_REGIONS}
            style={{
              width: '100%',
              maxWidth: 480,
              height: 585,
              minWidth: 0,
              minHeight: 0,
              display: 'block',
            }}
          />
          {/* 지도 위에 정확히 겹치는 마크 */}
          <img
            src={mark}
            alt="마크"
            style={{
              position: 'absolute',
              top: -20,
              left: 15,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 10,
            }}
          />
        </div>

        {/* 오른쪽 상단 화이트박스+화살표 */}
        <div className="poster-absolute poster-topright">
          <div className="white-topbox" />
          <img
            src={topArrow}
            alt="위쪽 화살표"
            className="arrow-topimg arrow-top"
          />
        </div>

        {/* 왼쪽 하단 화이트박스+화살표 */}
        <div className="poster-absolute poster-bottomleft">
          <img
            src={bottomArrow}
            alt="아래쪽 화살표"
            className="arrow-bottomimg arrow-bottom"
          />
          <div className="white-bottombox" />
        </div>
      </div>
      <BottomNav />
    </Background>
  );
}

