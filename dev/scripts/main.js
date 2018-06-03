const myApp = {};

myApp.navBarToggle = () => {
    $(".header__icon").on("click",() => {
        $(".header__nav").toggleClass("header__nav--active")
    });
}

myApp.navBarRemove = () => {
    $(".header__link").on("click", () => {
        $(".header__nav").removeClass("header__nav--active")
    });
}

// INITIALIZE

myApp.init = () => {
    myApp.navBarToggle()
    myApp.navBarRemove()
};

// DOCUMENT READY

$(function () {
    myApp.init();
});