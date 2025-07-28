let images = Array.from(document.images);

images.forEach(img => {
    img.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    img.alt = "Elzero Logo";
});
