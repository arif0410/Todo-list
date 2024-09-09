document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const name = document.getElementById('name').value.trim();
    const taskInput = document.getElementById('todo');
    const taskValue = taskInput.value.trim();
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value.trim();
    
    if (name && taskValue && date && description) {
        const newTask = document.createElement('li');
        newTask.classList.add('bg-gray-100', 'p-4', 'rounded-lg', 'flex', 'justify-between', 'items-center', 'shadow');


        const taskDetails = document.createElement('div');

        const taskText = document.createElement('p');
        taskText.classList.add('text-lg', 'font-bold');
        taskText.textContent = taskValue;


        const taskDate = document.createElement('p');
        taskDate.classList.add('text-sm', 'text-gray-500');
        taskDate.textContent = `Date: ${date}`;

        const taskDescription = document.createElement('p');
        taskDescription.classList.add('text-sm', 'text-gray-500');
        taskDescription.textContent = `Description: ${description}`;


        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('mr-2');


        checkbox.addEventListener('change', function() {
            if (this.checked) {
                taskText.classList.add('line-through', 'text-gray-500');
                taskDate.classList.add('line-through', 'text-gray-500');
                taskDescription.classList.add('line-through', 'text-gray-500');
            } else {
                taskText.classList.remove('line-through', 'text-gray-500');
                taskDate.classList.remove('line-through', 'text-gray-500');
                taskDescription.classList.remove('line-through', 'text-gray-500');
            }
        });


        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('bg-red-500', 'text-white', 'px-3', 'py-1', 'rounded-lg', 'hover:bg-red-600');

        deleteBtn.addEventListener('click', function() {
            newTask.remove();
        });

        taskDetails.appendChild(taskText);
        taskDetails.appendChild(taskDate);
        taskDetails.appendChild(taskDescription);

        newTask.appendChild(checkbox);
        newTask.appendChild(taskDetails);
        newTask.appendChild(deleteBtn);

        document.getElementById('todo-list').appendChild(newTask);

        taskInput.value = '';
        document.getElementById('name').value = '';
        document.getElementById('date').value = '';
        document.getElementById('description').value = '';
    } else {
        alert('Please fill in all fields');
    }
}

