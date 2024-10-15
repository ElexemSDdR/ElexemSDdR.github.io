import { sushiPhotos, $after_btn, $before_btn, showSlider, prevSlide, nextSlide, currentSlide } from './eating_sushi_carrousel.js';
import { localPhotos, $nextBtn, $prevBtn, $slider, nextPhoto, preventSlide, makeSlider } from './local_carrousel.js';

const $menuBtn = document.getElementById('menuBtn');
const $sideBarMenu = document.getElementById('sideBarMenu');
const $anchors = document.querySelectorAll('a');
const $closeSideBarMenu = document.getElementById('closeSideBarMenu');

$after_btn.addEventListener('click', nextSlide);
$before_btn.addEventListener('click', prevSlide);

$nextBtn.addEventListener('click', nextPhoto);
$prevBtn.addEventListener('click', preventSlide);

$menuBtn.addEventListener('click', () => {
    $sideBarMenu.classList.toggle('open');
});

$anchors.forEach((anchor) => {
    anchor.addEventListener('click', () => $sideBarMenu.classList.remove('open'));
});

$closeSideBarMenu.addEventListener('click', () => $sideBarMenu.classList.remove('open'));

document.addEventListener('DOMContentLoaded', () => {
    showSlider(currentSlide);
    makeSlider(currentSlide);
});