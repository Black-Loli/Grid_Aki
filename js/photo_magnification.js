var gallery = document.querySelector('#gallery');
gallery.querySelectorAll('.content').forEach(function (item) {
    item.addEventListener('click', () => {
        item.classList.toggle('full');
        showSlides(slideIndex);
    });
});

console.log("Акитушки");
