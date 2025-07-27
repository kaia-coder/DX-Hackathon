// src/components/common/BottomNav.js
import '../../styles/common/bottomnav.css';
import { ReactComponent as FestivalIcon } from '../../assets/nav/festival.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/nav/youtube.svg';
import { ReactComponent as TripIcon } from '../../assets/nav/trip.svg';

const menus = [
  { icon: <FestivalIcon />, label: '축제 정보' },
  { icon: <YoutubeIcon />, label: '세종시 공식 유튜브' },
  { icon: <TripIcon />, label: '추천 코스' }
];

export default function BottomNav({ activeIdx = 0, onTabChange }) {
  return (
    <nav className="bottom-nav">
      {menus.map((menu, i) => (
        <button
          key={menu.label}
          className={`nav-btn${activeIdx === i ? ' active' : ''}`}
          onClick={() => onTabChange?.(i)}
        >
          <span className="icon-box">{menu.icon}</span>
          <span className="nav-label">{menu.label}</span>
        </button>
      ))}
    </nav>
  );
}
