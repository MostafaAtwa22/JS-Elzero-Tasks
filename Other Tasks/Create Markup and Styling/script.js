let spans = document.querySelectorAll('.buttons span');
let result = document.querySelector('.results');
let input = document.querySelectorAll('input');

let checkInput = function() {
    return input[0].value === '';
}
spans.forEach(span => {
    span.addEventListener('click', function(e) {
        if (e.target.classList.contains('check-item')) {
            checkItem();
        }
        else if (e.target.classList.contains('add-item')) {
            addItem();
        }
        else if (e.target.classList.contains('delete-item')) {
            deleteItem();
        }
        else {
            showItem();
        }
        input[0].value = '';
        input[1].value = '';
    });
});

function checkItem () {
    if (checkInput()) {
        result.innerHTML = `input key is empty`;
        return;
    }
    if (localStorage.getItem(input.value)) {
        result.innerHTML = `We found item called <span>${input.value}</span>`;
    } else {
        result.innerHTML = `We can't find the item <span>${input.value}</span>`;
    }
}

function addItem() {
    if (input[1].value === '' || checkInput()) {
        result.innerHTML = `one of Inputs is empty`;
        return;
    }
    localStorage.setItem(input[0].value, input[1].value);
    result.innerHTML = `The element <span>${input[0].value}</span> is added`;
}

function deleteItem() {
    if (checkInput()) {
        result.innerHTML = `input key is empty`;
        return;
    }
    if (localStorage.getItem(input.value)) {
        result.innerHTML = `We found item called <span>${input.value}</span>`;
    } else {
        result.innerHTML = `The item <span>${input.value}</span> is Deleted`;
        localStorage.removeItem(input[0].value);
    }
}

function showItem() {
    result.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        result.innerHTML += `<span>${key} => ${value}</span>`;
    }
}