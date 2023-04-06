import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
  return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
});
galleryList.insertAdjacentHTML('beforeend', galleryMarkup.join(''));

galleryList.addEventListener('click', e => {
  e.preventDefault();

  const isGalleryImage = e.target.classList.contains('gallery__image');

  if (!isGalleryImage) {
    return;
  }

  const largeImageUrl = e.target.dataset.source;

  const instance = basicLightbox.create(`
      <div class="modal">
        <img src="${largeImageUrl}" width="800" height="600">
      </div>
    `);

  instance.show();
});
