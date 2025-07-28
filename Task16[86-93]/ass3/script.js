let input = document.querySelector('input[name="dollar"]');
let text = document.getElementsByClassName('result')[0];

input.oninput = function () {
    text.innerHTML = `{${input.value}} USD Dollar = {${parseFloat(input.value * 15.6).toFixed(2)}} Egyptian Pound`
}