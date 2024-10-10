const localPhotos = [
    {
        src: '../img/local-carrousel/cartel_tamashi.jpeg',
        id: 0
    },
    {
        src: '../img/local-carrousel/outside_1.jpeg',
        id: 1
    },
    {
        src: '../img/local-carrousel/kitty.jpeg',
        id: 2
    },
    {
        src: '../img/local-carrousel/inside_2.jpeg',
        id: 3
    },
    {
        src: '../img/local-carrousel/soups.jpeg',
        id: 4
    },
    {
        src: '../img/local-carrousel/kitchen_1.jpeg',
        id: 5
    },
    {
        src: '../img/local-carrousel/kitchen_2.jpeg',
        id: 6
    },
    {
        src: '../img/local-carrousel/kitchen_3.jpeg',
        id: 7
    },
    {
        src: '../img/local-carrousel/kitchen_4.jpeg',
        id: 8
    },
    {
        src: '../img/local-carrousel/kitchen_5.jpeg',
        id: 9
    },
    {
        src: '../img/local-carrousel/sushi-prepared.jpeg',
        id: 10
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