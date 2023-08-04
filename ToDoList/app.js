const task_inp = document.querySelector("#task-inp");
const task_container = document.querySelector(".task-container")
var count = 0;
const counterbox = document.getElementById("counterbox")

task_inp.addEventListener("keyup", function (e) {
    if (e.code == "Enter") {
        if (task_inp.value == "") {
            alert("Please Enter Some Task")
        }
        else {
            let task = document.createElement('div')
            task.classList.add('task')
            let p = document.createElement('p');
            p.innerHTML = task_inp.value;
            let span = document.createElement('span');
            span.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
            span.classList.add('delete-icon');
            task_container.appendChild(task)
            task.appendChild(p)
            task.appendChild(span)

            saveTodoList();

            task.addEventListener('click', function (e) {
                if (e.target.tagName === 'P') {
                    e.target.classList.toggle('checked')
                    saveTodoList();
                }
            })

            const current_task = document.querySelectorAll(".delete-icon")
            for (let i = 0; i < current_task.length; i++) {
                current_task[i].onclick = function () {
                    this.parentElement.remove();
                    saveTodoList();
                }
            }
        }
        task_inp.value = '';
    }
});

function saveTodoList() {
    localStorage.setItem('todolistdata', task_container.innerHTML)
}

function showtodo() {
    task_container.innerHTML = localStorage.getItem('todolistdata')
}

showtodo();