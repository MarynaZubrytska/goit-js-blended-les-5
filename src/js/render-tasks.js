import { createTask } from "./markup-tasks";
import refs from "./refs";

export function initTasks(tasks) {
  const markupList = tasks.map(createTask).join('');
  refs.taskList.insertAdjacentHTML('beforeend', markupList);
}