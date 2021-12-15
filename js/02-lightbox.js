import { galleryItems } from './gallery-items.js';
// Change code below this line

const paletteContainer = document.querySelector('.gallery');
const cardsMarkup = createCardsMarkup(galleryItems);

console.log(createCardsMarkup('galleryItems'));



function createCardsMarkup(cards) {
  return galleryItems.map(({ preview, original, description }) => {
      return `
      
 <li class="gallery__item">
  <a class="gallery__item" 
  href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>
</li>
    `;
    })
    .join('');
};
paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup)

let lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionPosition:'bottom',
    captionDelay:250,
});
 

lightbox.on(() => {
  lightbox.next();
});