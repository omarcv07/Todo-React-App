const makeFindAllTasks = ({ taskDb }) => {
  const findAllTasks = async () => {
    const tasks = await taskDb.findAll();
    return tasks;
  };

  return findAllTasks;
};

export default makeFindAllTasks;
