import { useState, useEffect } from 'react';
import { fetchFestivalRegions, fetchFestivalPosters } from '../api/festival';

export default function useFestivalData() {
  const [festivalRegions, setFestivalRegions] = useState([]);
  const [festivalPosters, setFestivalPosters] = useState({});

  useEffect(() => {
    // 축제 열리는 지역 id 배열
    fetchFestivalRegions().then(setFestivalRegions);
    // 지역별 포스터 이미지 경로 객체
    fetchFestivalPosters().then(setFestivalPosters);
  }, []);

  return { festivalRegions, festivalPosters };
}
