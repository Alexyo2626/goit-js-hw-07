import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const cardMurkup = createGalleryMurkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", cardMurkup);

//рендер разметки
function createGalleryMurkup(items) {
  return items
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
    .join("");
}

galleryEl.addEventListener("click", onCardClick);

//открытие модального окна
function onCardClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}">
  `);

  instance.show();

  //   прослушка клавистуры и закрытие по Esc
  window.addEventListener("keydown", closeModalWindowByEsc);

  function closeModalWindowByEsc(event) {
    console.log(event.code);
    if (event.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", closeModalWindowByEsc);
    }
  }
}
