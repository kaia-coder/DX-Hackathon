import React from 'react';
import SearchBar from '../components/SearchBar';
import MapRegion from '../components/MapRegion';
import BottomNav from '../components/BottomNav';

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
