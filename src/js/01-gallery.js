// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');
let galleryMarkup = '';

galleryItems.forEach(galleryItem => {
  galleryMarkup += `<a 
  class="gallery__item"
  href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      alt="${galleryItem.description}"
    />
  </a>`;
});
gallery.insertAdjacentHTML('afterbegin', galleryMarkup);

gallery.addEventListener('click', onImageClick);
function onImageClick(event) {
  event.preventDefault();
}

// const SimpleLightbox = require('simplelightbox');
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const simpleLightboxGallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

//
console.log(galleryItems);
