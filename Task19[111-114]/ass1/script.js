let fonts = document.getElementById('fonts');
let color = document.getElementById('color');
let size = document.getElementById('size');
let p = document.getElementById('displayText');
let form = document.querySelector('form');

const savedFont = window.localStorage.getItem('fonts');
const savedColor = window.localStorage.getItem('color');
const savedSize = window.localStorage.getItem('size');

if (savedFont) {
    p.style.fontFamily = savedFont;
    fonts.value = savedFont;
}
if (savedColor) {
    p.style.color = savedColor;
    color.value = savedColor;
}
if (savedSize) {
    p.style.fontSize = savedSize + 'px';
    size.value = savedSize;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    window.localStorage.setItem('fonts', fonts.value);
    window.localStorage.setItem('color', color.value);
    window.localStorage.setItem('size', size.value);

    p.style.fontFamily = fonts.value;
    p.style.color = color.value;
    p.style.fontSize = size.value + 'px';
});