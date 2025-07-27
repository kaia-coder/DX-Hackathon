import React from 'react';
import SearchBar from '../src/components/SearchBarBar';
import MapRegion from '../src/components/MapRegionion';
import BottomNav from '../src/components/BottomNavNav';

function Home() {
  return (
    <div style={{
      background: '#EAF6FA',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start'
    }}>
      <SearchBar />
      <MapRegion />
      <BottomNav />
    </div>
  );
}

export default Home;
