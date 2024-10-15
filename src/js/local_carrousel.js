const localPhotos = [
    {
        src: '../img/local-carrousel/cartel_tamashi.jpeg'
    },
    {
        src: '../img/local-carrousel/outside_1.jpeg'
    },
    {
        src: '../img/local-carrousel/kitty.jpeg'
    },
    {
        src: '../img/local-carrousel/inside_2.jpeg'
    },
    {
        src: '../img/local-carrousel/soups.jpeg'
    },
    {
        src: '../img/local-carrousel/kitchen_1.jpeg'
    },
    {
        src: '../img/local-carrousel/kitchen_2.jpeg'
    },
    {
        src: '../img/local-carrousel/kitchen_3.jpeg'
    },
    {
        src: '../img/local-carrousel/kitchen_4.jpeg'
    },
    {
        src: '../img/local-carrousel/kitchen_5.jpeg'
    },
    {
        src: '../img/local-carrousel/sushi-prepared.jpeg'
    }
]

const $slider = document.querySelector('.slider');
const $prevBtn = document.querySelector('#prev-btn');
const $nextBtn = document.querySelector('#next-btn');

let currentSlide = 0;

const makeSlider = (index) => {
    if (index > localPhotos.length - 1 ) {
        index = 0;
    }
    else if (index < 0) {
        index = localPhotos.length - 1;
    }
    $slider.innerHTML = '';
    const $img = document.createElement('img');
    $img.src = localPhotos[index].src;
    $img.alt = 'photo';
    $img.id = localPhotos[index].id;
    $img.classList.add('img')
    $slider.appendChild($img);
}

const preventSlide = () => {
    if (currentSlide === 0) {
        currentSlide = localPhotos.length - 1;
    } else {
        currentSlide--;
    }
    makeSlider(currentSlide);
}

const nextPhoto = () => {
    if (currentSlide === localPhotos.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    makeSlider(currentSlide);
}

$prevBtn.addEventListener('click', preventSlide);
$nextBtn.addEventListener('click', nextPhoto);

makeSlider(currentSlide);

export { localPhotos, currentSlide, $nextBtn, $prevBtn, $slider, nextPhoto, preventSlide, makeSlider }