// course2.js

fetch('https://sejong-festival-api.onrender.com/api/places')
  .then((res) => res.json())
  .then((places) => {
    places.forEach((place, index) => {
      const box = document.querySelector(`.box${index + 1}`);
      if (box) {
        const img = box.querySelector('img');
        const title = box.querySelector('strong');
        const address = box.querySelector('.place-address');
        const description = box.querySelector('.place-description');

        img.src = place.image_url;
        title.innerText = `• ${place.title}`;
        address.innerText = `주소 | ${place.address}`;
        description.innerText = place.description;
      }
    });
  })
  .catch((err) => {
    console.error('데이터 불러오기 실패:', err);
  });
