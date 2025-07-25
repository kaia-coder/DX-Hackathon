import React from 'react';
import { ReactComponent as FestivalIcon } from '../assets/svgs/festival.svg';
import { ReactComponent as YoutubeIcon } from '../assets/svgs/youtube.svg';
import { ReactComponent as CourseIcon } from '../assets/svgs/course.svg';

function BottomNav() {
  return (
    <nav style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      background: '#FFFFFF',
      borderTop: '1px solid #EAEAEA',
      position: 'fixed',
      bottom: 0,
      height: 60
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#7B7B7B' }}>
        <FestivalIcon width={28} height={28} />
        <span style={{ fontSize: 12, marginTop: 4 }}>축제 정보</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#7B7B7B' }}>
        <YoutubeIcon width={28} height={28} />
        <span style={{ fontSize: 12, marginTop: 4 }}>세종 유튜브</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#7B7B7B' }}>
        <CourseIcon width={28} height={28} />
        <span style={{ fontSize: 12, marginTop: 4 }}>추천 코스</span>
      </div>
    </nav>
  );
}

export default BottomNav;
