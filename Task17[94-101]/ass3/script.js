let div = document.querySelector('.our-element');
let p = document.querySelector('p');
p.remove();

let before = document.createElement('div');
before.className = 'start';
before.title = 'Start Element';
before.setAttribute("data-value", "Start");
before.textContent = 'Start';

let after = document.createElement('div');
after.className = 'end';
after.title = 'End Element';
after.setAttribute("data-value", "End");
after.textContent = 'End';

div.before(before);
div.after(after);
