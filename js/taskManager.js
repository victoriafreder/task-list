class TaskManager {
  constructor(currentId = 0) {
    this.currentId = currentId;
    this.tasks = [];
  }
  addTask = (name, description, assignedTo, dueDate, status = 'TODO') => {
    const taskObj = [
    this.currentId ++,
    name,
    description,
    assignedTo,
    dueDate,
    'TODO'
  ];
    this.tasks.push(taskObj);
    console.log(this.tasks);
  }
}