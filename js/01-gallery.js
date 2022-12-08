import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");

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

/////////
const instance = basicLightbox.create(
  `
	<h1>Not closable</h1>
	<p>It's not possible to close this lightbox with a click.</p>
`,
  {
    closable: true,
  }
);

instance.show(() => console.log("lightbox now visible"));
// instance.close(() => console.log("lightbox not visible anymore"));
// const visible = instance.visible();
// const instance = basicLightbox.create(document.querySelector(".gallery"));
console.log(instance);
