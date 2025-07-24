// src/pages/FestivalPage.js

import React from 'react';
import './FestivalPage.css'; // ✅ CSS 꼭 만들어야 함

export default function FestivalPage() {
  return (
    <div className="festival-background">
      <div className="festival-container">
        
        {/* 상단 로고 */}
        <div className="festival-logo">
          {/* ✅ TODO: 로고 파일이 /public/assets/logo.svg 에 있어야 함 */}
          <img src="/assets/logo.svg" alt="세모 로고" />
        </div>

        {/* 메인 포스터 */}
        <div className="festival-main-poster">
          {/* ✅ TODO: 복숭아축제 포스터 이미지 /public/assets/main_peach_festival.png 에 넣기 */}
          <img src="/assets/main_peach_festival.png" alt="복숭아축제 포스터" />
        </div>

        {/* ✅ TODO: 이후에 "곧 진행되는 축제" 섹션 등 추가할 위치 */}
      </div>
    </div>
  );
}
