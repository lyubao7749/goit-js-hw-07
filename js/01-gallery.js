import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
    galleryContainer: document.querySelector(".gallery"),
 };

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

const instance = basicLightbox.create(`
<img src=" " width="800" height="600">
`, {
onShow: (instance) => {
  window.addEventListener('keydown', onEscapePress);
 // console.log("addEventListener");
},

onClose: (instance) => {
  window.removeEventListener('keydown', onEscapePress);
 // console.log("removeEventListener");
 }
});

function onImageClick (event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  };

  const ImageSource = instance.element().querySelector("img");
  ImageSource.src = event.target.dataset.source;
  instance.show();
}

function onEscapePress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;
  if (isEscKey) {
    instance.close();
  }
 }



  
