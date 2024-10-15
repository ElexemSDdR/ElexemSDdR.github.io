const fotosLocales = ["./Imagenes/Mara.jpg", "./Imagenes/Tero.jpg", "./Imagenes/Zorro.jpg"]

const $slider = document.querySelector('.slider');

let fotoActual = 0;

const hacerSlider = (index) => {
    if (index > fotosLocales.length - 1 ) {
        index = 0;
    }
    else if (index < 0) {
        index = fotosLocales.length - 1;
    }
    $slider.innerHTML = '';
    const $img = document.createElement('img');
    $img.src = fotosLocales[index];
    $img.alt = 'photo';
    $img.classList.add('img')
    $slider.appendChild($img);
}

const fotoAnterior = () => {
    if (fotoActual === 0) {
        fotoActual = fotosLocales.length - 1;
    } else {
        fotoActual--;
    }
    hacerSlider(fotoActual);
}

const siguienteFoto = () => {
    if (fotoActual === fotosLocales.length - 1) {
        fotoActual = 0;
    } else {
        fotoActual++;
    }
    hacerSlider(fotoActual);
}

hacerSlider(fotoActual);

