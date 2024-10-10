const sushiPhotos = [
    {
        src: '../img/sushi-eating-carrousel/sushi-already-in-house.jpeg',
        id: 0 
    },
    {
        src: '../img/sushi-eating-carrousel/all-the-sushi.jpeg',
        id: 1
    },
    {
        src: '../img/sushi-eating-carrousel/camaron-sushi.jpeg',
        id: 2
    },
    {
        src: '../img/sushi-eating-carrousel/eating-sushi.jpeg',
        id: 3
    },
    {
        src: '../img/sushi-eating-carrousel/yellow-sushi-1.jpeg',
        id: 4
    },            
    {
        src: '../img/sushi-eating-carrousel/fried-sushi.jpeg',
        id: 5
    },
    {
        src: '../img/sushi-eating-carrousel/sauces.jpeg',
        id: 6
    },
    {
        src: '../img/sushi-eating-carrousel/vegetables-sushi.jpeg',
        id: 7
    }
];

const $slider_eating_sushi  = document.querySelector('.slider-eating-sushi');
const $before_btn = document.querySelector('#before-btn');
const $after_btn = document.querySelector('#after-btn');

let currentSlide = 0;

const showSlider = (index) => {
    $slider_eating_sushi.innerHTML = '';
    if (index > sushiPhotos.length - 1 ) {
        index = 0;
    }
    else if (index < 0) {
        index = sushiPhotos.length - 1;
    }
    const $img = document.createElement('img');
    $img.src = sushiPhotos[index].src;
    $img.alt = 'photo';
    $img.id = sushiPhotos[index].id;
    $img.classList.add('img')
    $slider_eating_sushi.appendChild($img);
};

const prevSlide = () => {
    if (currentSlide === 0) {
        currentSlide = sushiPhotos.length - 1;
    } else {
        currentSlide--;
    }
    showSlider(currentSlide);
};

const nextSlide = () => {
    if (currentSlide === sushiPhotos.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    showSlider(currentSlide);
};

$before_btn.addEventListener('click', prevSlide);
$after_btn.addEventListener('click', nextSlide);

export { currentSlide, sushiPhotos, $after_btn, $before_btn, $slider_eating_sushi, showSlider, prevSlide, nextSlide };
