var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    allowTouchMove: true,
    autoWidth: false,
    spaceBetween: 1000,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 5,
        slideShadows: true,
    },
    navigation: {
        nextEl: '.r',
        prevEl: '.l',
    },
    initialSlide: 0,
    breakpoints: {
        840:{
            spaceBetween: 0,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 0,
                stretch: 40,
                depth: 22,
                modifier: 5,
                slideShadows: true,
            },
            navigation: {
                nextEl: '.right',
                prevEl: '.left',
            },
        }
    }
});

function f() {
    slides = document.getElementsByClassName('swiper-slide');
    slides_lenght = slides.length;

    for (let i = 0; i < slides_lenght; i++) {
        slides[i].classList.remove('current');
        slides[i].classList.remove('next');
        slides[i].classList.remove('next_next');
        slides[i].classList.remove('over');
    }

    for (let i = 0; i < slides_lenght; i++) {
        if (slides[i].classList.contains('swiper-slide-active') && i == 0) {
            slides[i].classList.add('current');
            slides[i+1].classList.add('next');
            slides[i+2].classList.add('next_next');

            for (let j = i + 3; j < slides_lenght; j++) {
                slides[j].classList.add('over');
            }

            break;
        }

        if (slides[i].classList.contains('swiper-slide-active') && i == 1) {
            slides[i-1].classList.add('next');
            slides[i].classList.add('current');
            slides[i+1].classList.add('next');
            slides[i+2].classList.add('next_next');

            for (let j = i + 3; j < slides_lenght; j++) {
                slides[j].classList.add('over');
            }

            break;
        }

        if (slides[i].classList.contains('swiper-slide-active') && i + 1 == slides_lenght) {
            slides[i].classList.add('current');
            slides[i-1].classList.add('next');
            slides[i-2].classList.add('next_next');

            for (let j = 0; j < slides_lenght - 3; j++) {
                slides[j].classList.add('over');
            }

            break;
        }

        if (slides[i].classList.contains('swiper-slide-active') && i + 2 == slides_lenght) {
            slides[i+1].classList.add('next');
            slides[i].classList.add('current');
            slides[i-1].classList.add('next');
            slides[i-2].classList.add('next_next');

            for (let j = 0; j < slides_lenght - 4; j++) {
                slides[j].classList.add('over');
            }

            break;
        }
        
        if (slides[i].classList.contains('swiper-slide-active')) {

            for (let k = 0; k < slides_lenght; k++) {
                slides[k].classList.add('over');
            }

            slides[i+2].classList.add('next_next');
            slides[i+1].classList.add('next');
            slides[i].classList.add('current');
            slides[i-1].classList.add('next');
            slides[i-2].classList.add('next_next');

            break;
        }
        
        
    }
}
f();
swiper.on('slideChange', function () {
    

    setTimeout(f, 100);

});