const share = document.querySelector('.share');
const popup = document.querySelector('.popup');
const popupM = document.querySelector('.popup-m');

share.addEventListener('click', function () {
    popup.classList.toggle('popup-active');
    popupM.classList.toggle('popup-m-active');
});

