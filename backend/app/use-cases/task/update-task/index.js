const makePutTask = ({ taskDb }) => {
  const putTask = async ({ body, params }) => {
    const taskId = params.id;

    if (!taskId) {
      throw new Error('Invalid type or missing params');
    }

    const updateTask = await taskDb.update(taskId, body);

    return updateTask;
  };

  return putTask;
};

export default makePutTask;
