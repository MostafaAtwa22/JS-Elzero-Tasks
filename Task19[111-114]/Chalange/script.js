const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const taskContainer = document.querySelector('.task');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
renderTasks();

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = input.value.trim();
    if (value === '') 
        return;

    tasks.push(value); 
    localStorage.setItem('tasks', JSON.stringify(tasks));
    input.value = '';
    renderTasks();
});

function renderTasks() {
    taskContainer.innerHTML = ''; 
        tasks.forEach((task, index) => {
            const taskDiv = document.createElement('div');
            taskDiv.style.cssText = "margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center; border-radius: 20px; background-color: white; padding: 5px 20px;";

            const h2 = document.createElement('h2');
            h2.textContent = task;
            h2.style.fontSize = "20px";

            const btn = document.createElement('button');
            btn.textContent = 'Delete';
            btn.style.cssText = "display: block; padding: 5px; color: white; font-weight: bold; background-color: red; border-radius: 20px; cursor: pointer;";
            btn.onclick = function () {
                tasks.splice(index, 1); 
                localStorage.setItem('tasks', JSON.stringify(tasks));
                renderTasks(); 
            };

        taskDiv.append(h2, btn);
        taskContainer.append(taskDiv);
    });
}
