let add = document.querySelector('.classes-to-add');
let remove = document.querySelector('.classes-to-remove');
let div = document.querySelector('.classes-list div');

add.addEventListener("blur", function (e) {
    let value = e.target.value.trim();
    let content = value.toLowerCase().split(' ').filter(e => e !== "");
    if (content.length != 0) {
        content.forEach(element => {
            let innerDiv = document.createElement('span');
            innerDiv.textContent = element;
            div.append(innerDiv);
        });
        e.target.value = '';
    }
});

remove.addEventListener("blur", function (e) {
    let value = e.target.value.trim();
    let content = value.toLowerCase().split(' ').filter(e => e !== "");
    if (content.length != 0) {
        let spans = document.querySelectorAll('.classes-list div span');
        content.forEach(element => {
            spans.forEach(span => {
                if (element === span.textContent) {
                    span.remove();
                }
            });
        });
        if (document.querySelectorAll('.classes-list div span').length === 0) {
            let p = document.createElement('p');
            p.textContent = 'No Classes To Show';
            div.append(p)
        }
        e.target.value = '';
    }
});