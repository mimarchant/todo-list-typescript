//crear clase tarea
var TodoItem = /** @class */ (function () {
    function TodoItem(task, isCompleted) {
        this.task = task;
        this.isCompleted = isCompleted;
        this.task = task;
    }
    return TodoItem;
}());
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.addTask = function (task) {
        var newItem = new TodoItem(task, false);
        this.tasks.push(newItem);
    };
    return TaskManager;
}());
var HTMLHelper = /** @class */ (function () {
    function HTMLHelper() {
    }
    HTMLHelper.createTaskItem = function (task) {
        var listItem = document.createElement('li');
        var checkBox = document.createElement('input');
        var label = document.createElement('label');
        checkBox.type = 'checkbox';
        checkBox.addEventListener('change', function () {
            if (checkBox.checked) {
                task.isCompleted = true;
                displayTasks();
            }
        });
        label.innerText = task.task;
        listItem.appendChild(checkBox);
        listItem.appendChild(label);
        return listItem;
    };
    return HTMLHelper;
}());
var taskInput = document.getElementById('new-task');
var btn = document.getElementById('add-task');
var completedTasks = document.getElementById('completed-tasks');
var incompleteTasks = document.getElementById('incomplete-tasks');
var taskManager = new TaskManager();
btn.addEventListener('click', function () {
    taskManager.addTask(taskInput.value);
    displayTasks();
    clearInput();
});
function displayTasks() {
    completedTasks.innerHTML = '';
    incompleteTasks.innerHTML = '';
    taskManager.tasks.forEach(function (task) {
        var listItem = HTMLHelper.createTaskItem(task);
        if (task.isCompleted) {
            completedTasks.appendChild(listItem);
        }
        else {
            incompleteTasks.appendChild(listItem);
        }
    });
}
function clearInput() {
    taskInput.value = "";
}
