import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const imgItemEl = galleryItemsEl(galleryItems);
function galleryItemsEl() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}
galleryEl.insertAdjacentHTML('afterbegin', imgItemEl);
const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' });
