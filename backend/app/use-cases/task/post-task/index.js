import _ from 'lodash';

const makePostTask = ({ taskDb }) => {
  const postTask = async ({ body }) => {
    const areValuesNull = !_.every(['title', 'description', 'status_id', 'priority_id'], prop =>
      _.has(body, prop)
    );

    if (areValuesNull) {
      throw new Error('Invalid type or missing field');
    }

    const createdTask = await taskDb.insert(body);

    return createdTask;
  };

  return postTask;
};

export default makePostTask;
