import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
    galleryContainer: document.querySelector(".gallery"),
 };

 const modalBox = basicLightbox.create(
	`<div class="modal"><img src="" width="800" height="600"></div>`
);

 const imagesTemplate = ({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
  };
 
const addImage = galleryItems.map(imagesTemplate).join("");
refs.galleryContainer.insertAdjacentHTML("afterbegin", addImage);

refs.galleryContainer.addEventListener("click", onImageClick);

function onImageClick (event) {
  event.preventDefault();
  const ImageSource = modalBox.element().querySelector("img");
  ImageSource.src = event.target.dataset.source;
  modalBox.show();
  window.addEventListener("keydown", onCloseModal);
}

function onCloseModal(event) {
 	if (!event.code.toLowerCase() === "escape") return;

	window.removeEventListener("keydown", onCloseModal);
	modalBox.close();
}



  
