let createPopup = function () {
    let body = document.body;

    body.style.cssText = "display: flex; justify-content: center; align-items: center; height: 100vh";
    let popup = document.createElement('div');
    popup.style.cssText = "background-color: #ECECEC; width: 500px; position: relative; padding: 30px; text-align: center;";
    body.append(popup);

    let h1 = document.createElement('h1');
    h1.textContent = 'Weclome';
    popup.append(h1);
    
    let p = document.createElement('p');
    p.textContent = 'Welcome To Elzero Web School';
    p.style.marginTop = "20px";
    popup.append(p);

    let button = document.createElement('button');
    button.textContent = "X";
    button.style.cssText =  "cursor: pointer; background-color: red; border: none; border-radius: 50%; width: 30px; height: 30px; color: white; font-weight: bold; position: absolute; top: -15px; right: -15px;";
    popup.append(button);

    button.onclick = function() {
        popup.style.display = "none";
    }
}

setTimeout(createPopup, 5000);