document.querySelector('.switcher-btn').onclick = function() {
    document.querySelector('.color-switcher').classList.toggle('active');
};

let themeButtons = document.querySelectorAll('.theme-buttons');

themeButtons.forEach(function(color) {
    color.addEventListener('click', function() {
        let dataColor = color.getAttribute('data-color');
        document.documentElement.style.setProperty('--main-color', dataColor);
    });
});