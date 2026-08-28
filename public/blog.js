(function () {
  const galleryEl = document.getElementById('chloe-gallery');

  if (!galleryEl) {
    return;
  }

  const galleryDir = '../blogimg/chloe/';
  const images = [
    'IMG_0444.jpg',
    'IMG_0445.jpg',
    'IMG_0447.jpg',
    'IMG_0448.jpg',
    'IMG_0449.jpg',
    'IMG_0450.jpg',
    'IMG_0451.jpg',
    'IMG_0452.jpg',
    'IMG_0453.jpg',
    'IMG_0457.jpg',
    'IMG_0460.jpg',
    'IMG_0461.jpg',
    'IMG_0463.jpg',
    'IMG_0464.jpg',
    'IMG_0465.jpg',
    'IMG_1465.JPEG',
    'IMG_1466.JPEG',
    'IMG_1467.JPEG',
    'IMG_5732.JPEG',
    'chloe1.png',
    'chloe2.png',
    'chloe3.png',
    'chloe4.png',
    'chloe5.png',
    'chloe6.png'
  ];

  if (!images.length) {
    galleryEl.innerHTML = '<p class="small-note">no images found.</p>';
    return;
  }

  images.forEach(function (filename) {
    const wrapper = document.createElement('figure');
    wrapper.className = 'gallery-photo';

    const img = document.createElement('img');
    img.src = galleryDir + filename;
    img.alt = filename.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
    img.loading = 'lazy';

    wrapper.appendChild(img);
    galleryEl.appendChild(wrapper);
  });
})();
