class TaskManager {
  constructor(currentId = 0) {
    this.currentId = currentId;
    this.tasks = [];
  }
  addTask = (name, description, assignedTo, dueDate, status = 'TODO') => {
    const taskObj = {
    Id: this.currentId ++,
    name: name,
    description: description,
    assignedTo: assignedTo,
    dueDate: dueDate,
    status: 'TODO'
    }
    this.tasks.push(taskObj);
    console.log(this.tasks);
  }
}