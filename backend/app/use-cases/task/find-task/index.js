const makeFindTask = ({ taskDb }) => {
  const findTask = async ({ params }) => {
    const taskId = params.id;

    if (!taskId) {
      throw new Error('Missing ID param');
    }

    const foundTask = await taskDb.findOne(taskId);

    if (!foundTask) {
      throw new Error('Task not found');
    }

    return foundTask;
  };

  return findTask;
};

export default makeFindTask;
