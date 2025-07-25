import React from 'react';

// regionId, posterUrl을 props로 받음
function Poster({ regionId, posterUrl }) {
  // 각 지역 중심좌표(y, x)는 사전에 지정 (예시)
  const positions = {
    '조치원읍': { top: 90, left: 180 },
    '연기면': { top: 160, left: 90 }
    // ...필요시 추가
  };
  const pos = positions[regionId];

  if (!pos) return null;

  return (
    <img
      src={posterUrl}
      alt={`${regionId} 포스터`}
      style={{
        position: 'absolute',
        top: pos.top,
        left: pos.left,
        width: 56,
        height: 78,
        borderRadius: 8,
        background: '#FFF',
        boxShadow: '0 2px 10px rgba(0,0,0,0.06)'
      }}
    />
  );
}

export default Poster;
