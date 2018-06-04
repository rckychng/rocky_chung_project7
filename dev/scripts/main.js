const myApp = {};

myApp.navBarToggle = () => {
    $(".header__icon").on("click",() => {
        $(".header__nav").toggleClass("header__nav--active")
    });
    $(".header__icon").on("mouseover", () => {
        $(".header__nav").toggleClass("header__nav--active")
    });
}

myApp.navBarRemove = () => {
    $(".header__link").on("click", () => {
        $(".header__nav").removeClass("header__nav--active")
    });
}

myApp.scroll = () => {
    $(".header__link-text").smoothScroll();
}

// INITIALIZE

myApp.init = () => {
    myApp.navBarToggle()
    myApp.navBarRemove()
    myApp.scroll()
};

// DOCUMENT READY

$(function () {
    myApp.init();
});