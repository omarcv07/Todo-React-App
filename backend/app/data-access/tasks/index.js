const makeTaskDb = ({ Tasks }) => {
  async function findAll() {
    const tasks = Tasks.findAll();
    return tasks;
  }
  async function findOne(id) {
    const task = await Tasks.findByPk(id);
    return task;
  }
  async function insert(taskData) {
    return Tasks.create(taskData);
  }
  async function update(id, taskData = {}) {
    const task = await Tasks.findByPk(id);

    const { title, description, status_id, priority_id, due_date } = taskData;

    task.title = title;
    task.description = description;
    task.status_id = status_id;
    task.priority_id = priority_id;
    task.due_date = due_date || null;

    await task.save();

    return task;
  }

  async function remove(id) {
    const task = await Tasks.findByPk(id);
    await task.destroy();
    return task;
  }

  return Object.freeze({
    findAll,
    findOne,
    insert,
    update,
    remove
  });
};

export default makeTaskDb;
