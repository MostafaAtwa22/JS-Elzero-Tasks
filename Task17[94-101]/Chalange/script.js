let body = document.body;
body.style.cssText = "height: 100vh; display: flex; flex-direction: column; background-color: #ececec";

// create the header
let header = document.createElement('div');
header.className = 'head';
header.style.cssText =  "maring: 0; height: 70px; background-color: white; padding: 0 20px;" + 
                        "display: flex; justify-content: space-between; align-items: center;";
body.append(header);

let h2 = document.createElement('h2');
h2.textContent = "Elzero";
h2.style.color = "rgb(34 169 109)";
header.append(h2);

let ul = document.createElement('ul');
header.append(ul);
ul.style.cssText =  "height: 100%; display: flex; justify-content: space-between; align-items: center;" +
                    "list-style: none;"

let li1 = document.createElement('li');
li1.textContent = 'Home';
let li2 = document.createElement('li');
li2.textContent = 'About';
let li3 = document.createElement('li');
li3.textContent = 'Services';
let li4 = document.createElement('li');
li4.textContent = 'Contact';
ul.append(li1, li2, li3, li4);

let li = document.querySelectorAll('li');
li.forEach(function(item) {
    item.style.cssText = "margin-right: 20px";
});

// create the section
let section = document.createElement('div');
section.className = 'section';
section.style.cssText = "flex: 1; display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));" +
                        "padding: 20px; gap: 20px";
body.append(section);
for (let i = 0; i < 15; i++) {
    let element = document.createElement('div');
    element.style.cssText = "background-color: white; display: flex; flex-direction: column; justify-content: center; align-items: center;";
    section.append(element);

    let h3 = document.createElement('h3');
    h3.style.cssText = "font-size: 30px; margin-bottom: 0";
    h3.textContent = `${i + 1}`;
    element.append(h3);

    let elementP = document.createElement('p');
    elementP.textContent = 'Product';
    elementP.style.cssText = "color: #777; margin: 0";
    element.append(elementP);
}
// create the footer
let footer = document.createElement('footer');
footer.className = 'footer';
footer.textContent = 'Copyright 2025'
footer.style.cssText =  "maring: 0; height: 70px; background-color: rgb(34 169 109); color: white; font-size: 20px;" + 
                        "display: flex; justify-content: center; align-items: center;";
body.append(footer);
