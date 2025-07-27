import React from 'react';
import { ReactComponent as SearchIcon } from '../assets/svgs/search.svg';

function SearchBar() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      background: 'rgba(255,255,255,0.8)',
      border: '1px solid #D3DEE1',
      borderRadius: 8,
      padding: '12px 20px',
      margin: '24px 16px'
    }}>
      <SearchIcon width={20} height={20} style={{ color: '#828282' }}/>
      <input
        style={{
          border: 'none',
          outline: 'none',
          background: 'transparent',
          color: '#828282',
          marginLeft: 10,
          flex: 1,
          fontSize: 16
        }}
        placeholder="검색"
      />
    </div>
  );
}

export default SearchBar;
