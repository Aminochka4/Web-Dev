function addButton() {
    let newItem = document.createElement('div');
    newItem.className = "item";

    let inputText = document.getElementById('input').value.trim();
    if (inputText === "") {
        alert("Please enter the task again");
        return;
    }

    let textContainer = document.createElement('span');
    textContainer.textContent = inputText;
    textContainer.className = "text"

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function () {
        textContainer.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
        
        // saveData();
    });

    let deleteIcon = document.createElement('img');
    deleteIcon.src = 'trash_can.png';
    deleteIcon.alt = 'Delete';
    deleteIcon.className = 'delete-icon';
    deleteIcon.addEventListener('click', function () {
        newItem.remove();
        
        // saveData();
    });

    newItem.appendChild(checkbox);
    newItem.appendChild(textContainer);
    newItem.appendChild(deleteIcon);

    document.getElementById('tasks').appendChild(newItem);

    document.getElementById('input').value = '';
    
    // saveData();
}

// function saveData() {
//     let tasksData = [];
//     let taskItems = document.querySelectorAll('.item');

//     taskItems.forEach(function(item) {
//         let taskText = item.querySelector('.text').textContent;
//         let isChecked = item.querySelector('input[type="checkbox"]').checked;
//         tasksData.push({text: taskText, checked: isChecked});
//     });

//     localStorage.setItem('tasksData', JSON.stringify(tasksData));
// }

// function showTasks() {
//     let tasksData = JSON.parse(localStorage.getItem('tasksData')) || [];

//     tasksData.forEach(function(task) {
//         let newItem = document.createElement('div');
//         newItem.className = "item";

//         let textContainer = document.createElement('span');
//         textContainer.textContent = task.text;
//         textContainer.className = "text";
//         if (task.checked) {
//             textContainer.style.textDecoration = 'line-through';
//         }

//         let checkbox = document.createElement('input');
//         checkbox.type = 'checkbox';
//         checkbox.checked = task.checked;

//         checkbox.addEventListener('change', function () {
//             textContainer.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
//             saveData(); // Сохраняем данные при изменении состояния чекбокса
//         });

//         let deleteIcon = document.createElement('img');
//         deleteIcon.src = 'trash_can.png';
//         deleteIcon.alt = 'Delete';
//         deleteIcon.className = 'delete-icon';
//         deleteIcon.addEventListener('click', function () {
//             newItem.remove();
//             saveData(); // Сохраняем данные при удалении задачи
//         });

//         newItem.appendChild(checkbox);
//         newItem.appendChild(textContainer);
//         newItem.appendChild(deleteIcon);

//         document.getElementById('tasks').appendChild(newItem);
//     });
// }

// showTasks();
