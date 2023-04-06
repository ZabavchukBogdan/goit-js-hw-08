
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector('.gallery')

const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join('');

gallery.insertAdjacentHTML('beforeend', markup)


 new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, scrollZoom: false, })
 
