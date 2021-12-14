import { galleryItems } from './gallery-items.js';
// Change code below this line


const paletteContainer = document.querySelector('div.gallery');
const cardsMarkup = createCardsMarkup(galleryItems);
paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup)
console.log(createCardsMarkup('galleryItems'));



function createCardsMarkup(cards) {
  return galleryItems.map(({ preview, original, description }) => {
      return `
   <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join('');
};

paletteContainer.addEventListener('click',onImageClick)
function onImageClick(e) {
    console.log(e.target)
    e.preventDefault();

    basicLightbox.create(`
   <img width="" height="" src="${e.target.dataset.source}" alt = "${e.target.alt}">

	`).show()

}


