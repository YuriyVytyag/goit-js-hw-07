import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
const imgItemEl = galleryItemsEl(galleryItems);
function galleryItemsEl() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}
galleryEl.insertAdjacentHTML('afterbegin', imgItemEl);
let instance = {};
function onGalleryElClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  let fullImg = event.target.dataset.source;
  createBasicLightbox(fullImg);
  if (basicLightbox.visible()) {
    galleryEl.removeEventListener('click', onGalleryElClick);
  }
  openModal();
}
function createBasicLightbox(fullImg) {
  instance = basicLightbox.create(`
    <img src="${fullImg}" width="800" height="600">`);
}
function openModal() {
  instance.show();
  document.addEventListener('keydown', handleCloseAction);
  /*   document.querySelector('body').style.overflow = 'hidden';
   */
}
galleryEl.addEventListener('click', onGalleryElClick);
function handleCloseAction(event) {
  if (event.code === 'Escape') {
    instance.close();
    document.removeEventListener('keydown', handleCloseAction);
    /*     document.querySelector('body').style.overflow = 'visible';
     */
  }
  /*   document.querySelector('body').style.overflow = 'visible';
   */
}
