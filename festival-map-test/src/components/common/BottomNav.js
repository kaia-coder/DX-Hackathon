// src/components/common/BottomNav.js
import '../../styles/common/bottomnav.css';
import { ReactComponent as FestivalIcon } from '../../assets/nav/festival.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/nav/youtube.svg';

const menus = [
  { icon: <FestivalIcon />, label: '축제·행사' },
  { icon: <YoutubeIcon />, label: '유튜브' }
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
