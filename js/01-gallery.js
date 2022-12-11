import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", openModalGallery);
gallery.addEventListener("keydown", closeModalGallery);

const murkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", murkup);

let instance = null;

function openModalGallery(evt) {
  evt.preventDefault();
  const galleryImg = evt.target.nodeName;
  const originalImage = evt.target.dataset.source;

  if (galleryImg !== "IMG") {
    return;
  }

  instance = basicLightbox.create(`
        <img src="${originalImage}" width="800" height="600">
    `);

  instance.show();
}

function closeModalGallery(evt) {
  //   console.log(evt.key);
  if (evt.key === "Escape") {
    instance.close(() => console.log("lightbox not visible anymore"));
  }
}
