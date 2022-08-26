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
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </div>`;
    })
    .join("");
}

//подключение галереии
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
