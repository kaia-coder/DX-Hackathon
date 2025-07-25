import React from 'react';
import { ReactComponent as MapSVG } from '../assets/svgs/map.svg';
import useFestivalData from '../hooks/useFestivalData';
import Poster from './Poster';

function MapRegion() {
  const { festivalRegions, festivalPosters } = useFestivalData(); // 예: ['조치원읍', '연기면']
  
  // 동적으로 fill 적용할 함수
  const getFill = (regionId) =>
    festivalRegions.includes(regionId) ? '#FFD600' : '#CAE2EE';

  // map.svg를 SVGR로 불러왔다고 가정: 각 <path id="조치원읍" ... /> 구조
  return (
    <div style={{
      width: 360,
      margin: '0 auto',
      position: 'relative',
      height: 400
    }}>
      <MapSVG
        style={{ width: '100%', height: 400 }}
        // 아래처럼 <path> 동적 fill 적용은 실제로는 svg 파일 내 path에 props 내려주어야 함
      />
      {/* 포스터 오버레이 */}
      {festivalRegions.map(regionId => (
        <Poster
          key={regionId}
          regionId={regionId}
          posterUrl={festivalPosters[regionId]}
        />
      ))}
    </div>
  );
}

export default MapRegion;
