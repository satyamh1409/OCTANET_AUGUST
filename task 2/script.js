document.addEventListener('DOMContentLoaded', function () {
    const categorySelect = document.getElementById('category');
    const taskInput = document.getElementById('task');
    const prioritySelect = document.getElementById('priority');
    const deadlineInput = document.getElementById('deadline');
    const addTaskButton = document.getElementById('add-task');
    const tasksList = document.getElementById('tasks');
  
    addTaskButton.addEventListener('click', addTask);
  
    function addTask() {
      const category = categorySelect.value;
      const task = taskInput.value;
      const priority = prioritySelect.value;
      const deadline = deadlineInput.value;
  
      if (task === '') {
        return;
      }
  
      const taskItem = document.createElement('li');
      taskItem.textContent = `${task} (Priority: ${priority}, Deadline: ${deadline})`;
      taskItem.classList.add(priority + '-priority', category + '-category');
  
      tasksList.appendChild(taskItem);
  
      taskInput.value = '';
      prioritySelect.value = 'high';
      deadlineInput.value = '';
    }
  });
  