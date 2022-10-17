var gallery = document.querySelector('#gallery');
gallery.querySelectorAll('.content').forEach(function (item) {
    item.addEventListener('click', function () {
        item.classList.toggle('full');
        showSlides(slideIndex);
    });
});