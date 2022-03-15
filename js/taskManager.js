const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
  const html = `
  <li class="list-group-item">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <h5 class="col card-title">${name}</h5>
                  <h6 class="col card-subtitle text-danger text-end">Due Date: ${dueDate}</h6>
                </div>
                <h6 class="card-subtitle mb-2 text-muted">Assigned to: ${assignedTo}</h6>
                <p class="card-text">${description}</p>
                <div class="dropdown d-flex justify-content-end">
                  <button class="btn btn-light dropdown-toggle" type="button" id="progress" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    ${status}
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="progress">
                    <li><a class="dropdown-item" href="#">To Do</a></li>
                    <li><a class="dropdown-item" href="#">In Progress</a></li>
                    <li><a class="dropdown-item" href="#">Review</a></li>
                    <li><a class="dropdown-item" href="#">Done</a></li>
                  </ul>
                </div>
              </div>
          </li>
  `;
  return html;
}

class TaskManager {
  constructor(currentId = 0) {
    this.currentId = currentId;
    this.tasks = [];
  }
  addTask = (name, description, assignedTo, dueDate, status = 'TODO') => {
    const taskObj = [
      this.currentId++,
      name,
      description,
      assignedTo,
      dueDate,
      status
    ];
    this.tasks.push(taskObj);
    console.log(this.tasks);
  }
}