const {assert} = require('chai');
const { describe, it } = require('mocha');
const { addTask, deleteTask, getTaskById, TaskManager} = require('../js/taskManager');
//const { myTask } = require('../js/index');
//const app = require('../taskManager.js');

describe('constructor', () => {
  it('is called when Task Manager is initialized', () => {
    //Setup

    //Exercise

    //Verify
  })
})

describe('addTask', () => {
  it('increments this.currentId', () => {
    //Setup
    let testTask = new TaskManager;
    testTask.currentId = 0;
    const expected = 1;
    //Exercise
    testTask.addTask();
    const actual = testTask.currentId;
    //Verify
    assert.strictEqual(actual, expected);
  })

  it('pushes task object into an array', () => {
    //Setup

    //Exercise

    //Verify
  })
})

describe('getTaskById', () => {
  it('returns taskId', () => {
    //Setup

    //Exercise

    //Verify
  })
})

describe('deleteTask', () => {
  it('pushes the task into a new array', () => {
    //Setup

    //Exercise

    //Verify
  })
})