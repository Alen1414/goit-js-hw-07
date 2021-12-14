import { galleryItems } from './gallery-items.js';
// Change code below this line


const paletteContainer = document.querySelector('.gallery');
const cardsMarkup = createCardsMarkup(galleryItems);
    paletteContainer.insertAdjacentHTML('beforeend',cardsMarkup)
console.log(createCardsMarkup(galleryItems));

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
}




    




// const cardsMarkup = createGalaryCards(cards);
// console.log(cardsMarkup);

// galeryEl.insertAdjacentElement('beforeend', cardsMarkup);

// galeryEl.addEventListener('click')
// const galeryEl = document.querySelector('.gallery')
// console.log(galeryEl)

// const galeryItemEl = document.querySelector('.gallery__item')
// console.log(galeryItemEl);

// const galeryItemLinkEl = document.querySelector('.gallery__link')
// console.log(galeryItemLinkEl);