let lis = document.querySelectorAll('ul li');
let div = document.querySelector('.experiment');

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('backgroundColor')) {
        div.style.backgroundColor = localStorage.getItem('backgroundColor');
        lis.forEach((li) => {
            li.classList.remove("active");
        });
        document.querySelector(`[data-color="${localStorage.getItem('backgroundColor')}"]`).classList.add('active');
    }
});

lis.forEach(li => {
    li.addEventListener('click', function() {
        // 1 delete all active classes
        lis.forEach(li => {
            li.classList.remove('active');
        });
        // 2 add active class to the clicked li
        this.classList.add('active');
        // 3 ADD IT to localStorage
        window.localStorage.setItem('backgroundColor', this.dataset.color);
        // 4 change the background color of the div
        div.style.backgroundColor = localStorage.getItem('backgroundColor');
    });
});