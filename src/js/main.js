import { sushiPhotos, $after_btn, $before_btn, showSlider, prevSlide, nextSlide, currentSlide } from './eating_sushi_carrousel.js';
import { localPhotos, $nextBtn, $prevBtn, $slider, nextPhoto, preventSlide, makeSlider } from './local_carrousel.js';

$after_btn.addEventListener('click', nextSlide);
$before_btn.addEventListener('click', prevSlide);

$nextBtn.addEventListener('click', nextPhoto);
$prevBtn.addEventListener('click', preventSlide);


document.addEventListener('DOMContentLoaded', () => {
    showSlider(currentSlide);
    makeSlider(currentSlide);
});