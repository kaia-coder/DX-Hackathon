// src/components/common/SearchBar.js
import '../../styles/common/searchbar.css';
import { ReactComponent as SearchIcon } from '../../assets/nav/search.svg';

export default function SearchBar({ placeholder = "검색" }) {
  return (
    <div className="search-bar">
      <SearchIcon className="search-icon" width="18" height="18" />
      <input type="text" className="search-input" placeholder={placeholder} />
    </div>
  );
}
