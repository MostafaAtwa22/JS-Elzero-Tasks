let div = document.createElement('div');
document.body.append(div);
div.style.cssText = "width: 200px; height: 200px; margin: 200px auto;" + 
                    "align-content: center; text-align: center; border-radius: 50%; background-color: #f4f4f4f4;" + 
                    "color: green; font-size: 30px;";
div.textContent = 10;

document.body.appendChild(div);

let countDown = _ => {
    div.textContent -= 1;
    if (div.textContent === "0") {
        clearInterval(cnt);
        location.href = "https://elzero.org/"
    }
}

let cnt = setInterval(countDown, 1000);