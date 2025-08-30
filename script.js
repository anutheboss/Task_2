const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const task = todoInput.value.trim();
  if (!task) return alert('Please enter a task!');
  todoInput.value = '';
  addTask(task);
});

function addTask(text) {
  const li = document.createElement('li');
  
  const span = document.createElement('span');
  span.textContent = text;
  li.appendChild(span);
  
  const check = document.createElement('input');
  check.type = 'checkbox';
  li.appendChild(check);
  
  const del = document.createElement('button');
  del.textContent = 'Delete';
  li.appendChild(del);
  
  todoList.appendChild(li);

  check.addEventListener('change', () => {
    span.style.textDecoration = check.checked ? 'line-through' : 'none';
  });

  del.addEventListener('click', () => {
    todoList.removeChild(li);
  });
}
