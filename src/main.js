import { nanoid } from 'nanoid';

import { createTask } from './js/markup-tasks';

import { initTasks } from './js/render-tasks';

import refs from './js/refs';

import { applySavedTheme, setupThemeToggle } from './js/theme-switcher.js';

applySavedTheme();   

const TASKS_KEY = 'tasks';
let tasks = JSON.parse(localStorage.getItem(TASKS_KEY)) || [];

refs.formRef.addEventListener('submit', handleSubmit);

refs.taskList.addEventListener('click', handleDelete);

function handleDelete(event) {
  if (!event.target.classList.contains('task-list-item-btn')) return;

  const btnDelete = event.target;
  const parentLi = btnDelete.closest('li');
  const id = parentLi.dataset.id;

  tasks = tasks.filter(task => task.id !== id);
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));

  parentLi.remove();
}

function handleSubmit(event) {
  event.preventDefault();

  const title = event.target.elements.taskName;

  const description = event.target.elements.taskDescription;

  const newTask = {
    id: nanoid(),
    title: title.value.trim(),
    description: description.value.trim()
  }

  tasks.push(newTask);

  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));

  const markup = createTask(newTask);
  refs.taskList.insertAdjacentHTML('beforeend', markup);
  console.log(markup);
}

initTasks(tasks);

setupThemeToggle();   

