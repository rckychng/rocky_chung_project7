const myApp = {};

myApp.navBarToggle = () => {
    $('.header__icon').on('click',() => {
        $('.header__nav').toggleClass('header__nav--active')
    });
}

myApp.navBarRemove = () => {
    $('.header__link').on('click', () => {
        $('.header__nav').removeClass('header__nav--active')
    });
}

myApp.loadRandomColor = () => {
    const $resumeRed = $('<a class="about__pdf" href="assets/rockychung--red.pdf" target="_blank">Resume</a>');
    const $resumePink = $('<a class="about__pdf" href="assets/rockychung--pink.pdf" target="_blank">Resume</a>');
    const $resumeYellow = $('<a class="about__pdf" href="assets/rockychung--yellow.pdf" target="_blank">Resume</a>');
    const $resumeBlue = $('<a class="about__pdf" href="assets/rockychung--blue.pdf" target="_blank">Resume</a>');
    const $resumeTeal = $('<a class="about__pdf" href="assets/rockychung--teal.pdf" target="_blank">Resume</a>');
    const $resumeGreen = $('<a class="about__pdf" href="assets/rockychung--green.pdf" target="_blank">Resume</a>');

    const randomColor = Math.floor(Math.random() * 6);
    // console.log(randomColor);
    if (randomColor === 5) {
        $('#about__resume').append($resumeRed);
        $('.header').addClass('header--red');
        $('.header__link-text').addClass('header__link-text--red');
        $('.about__illustration').addClass('about__illustration--red');
        $('.about__pdf').addClass('about__pdf--red');
        $('.about__icon').addClass('about__icon--red');
        $('.work__links').addClass('work__links--red');
        $('.work__link').addClass('work__link--red');
        $('.skills').addClass('skills--red');
        $('.contact__link').addClass('contact__link--red');
        $('.contact__submit').addClass('contact__submit--red');
        $('.footer__icon').addClass('footer__icon--red');
    } else if (randomColor === 4) {
        $('#about__resume').append($resumePink);
        $('.header').addClass('header--pink');
        $('.header__link-text').addClass('header__link-text--pink');
        $('.about__illustration').addClass('about__illustration--pink');
        $('.about__pdf').addClass('about__pdf--pink');
        $('.about__icon').addClass('about__icon--pink');
        $('.work__links').addClass('work__links--pink');
        $('.work__link').addClass('work__link--pink');
        $('.skills').addClass('skills--pink');
        $('.contact__link').addClass('contact__link--pink');
        $('.contact__submit').addClass('contact__submit--pink');
        $('.footer__icon').addClass('footer__icon--pink');
    } else if (randomColor === 3) {
        $('#about__resume').append($resumeYellow);
        $('.header').addClass('header--yellow');
        $('.header__link-text').addClass('header__link-text--yellow');
        $('.about__illustration').addClass('about__illustration--yellow');
        $('.about__pdf').addClass('about__pdf--yellow');
        $('.about__icon').addClass('about__icon--yellow');
        $('.work__links').addClass('work__links--yellow');
        $('.work__link').addClass('work__link--yellow');
        $('.skills').addClass('skills--yellow');
        $('.contact__link').addClass('contact__link--yellow');
        $('.contact__submit').addClass('contact__submit--yellow');
        $('.footer__icon').addClass('footer__icon--yellow');
    } else if (randomColor === 2) {
        $('#about__resume').append($resumeBlue);
        $('.header').addClass('header--blue');
        $('.header__link-text').addClass('header__link-text--blue');
        $('.about__illustration').addClass('about__illustration--blue');
        $('.about__pdf').addClass('about__pdf--blue');
        $('.about__icon').addClass('about__icon--blue');
        $('.work__links').addClass('work__links--blue');
        $('.work__link').addClass('work__link--blue');
        $('.skills').addClass('skills--blue');
        $('.contact__link').addClass('contact__link--blue');
        $('.contact__submit').addClass('contact__submit--blue');
        $('.footer__icon').addClass('footer__icon--blue');
    } else if (randomColor === 1) {
        $('#about__resume').append($resumeTeal);
        $('.header').addClass('header--teal');
        $('.header__link-text').addClass('header__link-text--teal');
        $('.about__illustration').addClass('about__illustration--teal');
        $('.about__pdf').addClass('about__pdf--teal');
        $('.about__icon').addClass('about__icon--teal');
        $('.work__links').addClass('work__links--teal');
        $('.work__link').addClass('work__link--teal');
        $('.skills').addClass('skills--teal');
        $('.contact__link').addClass('contact__link--teal');
        $('.contact__submit').addClass('contact__submit--teal');
        $('.footer__icon').addClass('footer__icon--teal');
    } else {
        $('#about__resume').append($resumeGreen);
        $('.header').addClass('header--green');
        $('.header__link-text').addClass('header__link-text--green');
        $('.about__illustration').addClass('about__illustration--green');
        $('.about__pdf').addClass('about__pdf--green');
        $('.about__icon').addClass('about__icon--green');
        $('.work__links').addClass('work__links--green');
        $('.work__link').addClass('work__link--green');
        $('.skills').addClass('skills--green');
        $('.contact__link').addClass('contact__link--green');
        $('.contact__submit').addClass('contact__submit--green');
        $('.footer__icon').addClass('footer__icon--green');
    }
}

myApp.smoothScroll = () => {
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
            ) {
            // Figure out element to scroll to
            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000); //, function () {
                // Callback after animation
                // Must change focus!
                // const $target = $(target);
                // $target.focus();
                // if ($target.is(":focus")) { // Checking if the target was focused
                //     return false;
                // } else {
                //     $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                //     $target.focus(); // Set focus again
                //     };
                // });
            }
        }
    });
}

// INITIALIZE

myApp.init = () => {
    myApp.navBarToggle()
    myApp.navBarRemove()
    myApp.loadRandomColor()
    myApp.smoothScroll()
};

// DOCUMENT READY

$(function () {
    myApp.init();
});