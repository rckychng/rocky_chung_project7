const myApp = {};

myApp.navBarToggle = () => {
    $(".header__icon").on("click",() => {
        $(".header__nav").toggleClass("header__nav--active")
    });
    // $(".header__icon").on("mouseover", () => {
    //     $(".header__nav").toggleClass("header__nav--active")
    // });
}

myApp.navBarRemove = () => {
    $(".header__link").on("click", () => {
        $(".header__nav").removeClass("header__nav--active")
    });
}

// myApp.scroll = () => {
//     $(".header__link-text").smoothScroll();
// }

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
                }, 1000, function () {
                // Callback after animation
                // Must change focus!
                const $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
}



// INITIALIZE

myApp.init = () => {
    myApp.navBarToggle()
    myApp.navBarRemove()
    // myApp.scroll()
    myApp.smoothScroll()
};

// DOCUMENT READY

$(function () {
    myApp.init();
});