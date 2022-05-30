import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
    galleryContainer: document.querySelector(".gallery"),
 };

 const imagesTemplate = ({ preview, original, description }) => {
    return `<li>
    <a class="gallery__item" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>    
  </li>`;
  };
 
const addImage = galleryItems.map(imagesTemplate).join("");
refs.galleryContainer.insertAdjacentHTML("afterbegin", addImage);

const lightbox = new SimpleLightbox(".gallery .gallery__item", {
	captionsData: "alt",
	captionDelay: 250,
});
