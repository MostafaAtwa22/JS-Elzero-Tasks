let number = document.querySelector('input[type="number"]');
let text = document.querySelector('input[type="text"]');
let option = document.querySelector('select');
let submit = document.querySelector('input[type="submit"]');
let results = document.querySelector('.results');

document.forms[0].addEventListener('submit', function(ev) {
    ev.preventDefault(); 

    results.innerHTML = ""; 

    let count = parseInt(number.value);
    let elementText = text.value;
    let elementType = option.value.toLowerCase();
    for (let i = 0; i < count; i++) {
        let ele = document.createElement(elementType);
        ele.innerHTML = elementText;
        ele.setAttribute("id", `id-${i}`);
        ele.setAttribute("class", `box`);
        ele.setAttribute("title", `Element`);
        ele.style.padding = "20px";
        ele.style.backgroundColor = "#fc680a";
        ele.style.textAlign = "center";
        ele.style.color = 'white'
        results.appendChild(ele);
        results.style.display = "grid";
        results.style.gap = "40px";
        results.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))";
    }
});