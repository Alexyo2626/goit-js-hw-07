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
let instance = basicLightbox.create(
  `
      <img src="">
  `,
  {
    onShow: () => {
      console.log("open");
      window.addEventListener("keydown", closeModalWindowByEsc);
    },
    onClose: () => {
      console.log("close");
      window.removeEventListener("keydown", closeModalWindowByEsc);
    },
  }
);

//открытие модального окна
function onCardClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const elem = instance.element();
  const img = elem.querySelector("img");
  img.src = event.target.dataset.source;
  console.log(img);
  instance.show();
}

function closeModalWindowByEsc(event) {
  console.log(event.code);
  if (event.code === "Escape") {
    instance.close();
  }
}
