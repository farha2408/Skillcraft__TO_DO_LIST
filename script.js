let taskList = document.getElementById('task-list');
let addTaskButton = document.getElementById('add-task');
let taskInput = document.getElementById('task');

addTaskButton.addEventListener('click', addTask);

function addTask() {
	let task = taskInput.value.trim();
	if (task) {
		let taskElement = document.createElement('li');
		taskElement.textContent = task;
		taskList.appendChild(taskElement);
		taskInput.value = '';
	}
}

taskList.addEventListener('click', toggleChecked);

function toggleChecked(event) {
	if (event.target.tagName === 'LI') {
		event.target.classList.toggle('checked');
	}
}