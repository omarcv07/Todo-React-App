const makeRemoveTask = ({ taskDb }) => {
  const removeTask = async ({ params }) => {
    const taskId = params.id;

    if (!taskId) {
      throw new Error('Invalid type or missing params');
    }

    const removedTask = await taskDb.remove(taskId);

    return removedTask;
  };

  return removeTask;
};

export default makeRemoveTask;
