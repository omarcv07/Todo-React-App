module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'tasks',
      [
        {
          title: 'Call mom',
          description: 'Ask her about her trip to the beach',
          status_id: 1,
          priority_id: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'Buy groceries',
          description: 'Milk, eggs, bread, and bananas',
          status_id: 2,
          priority_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'Finish project',
          description: 'Write tests and documentation',
          status_id: 3,
          priority_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tasks', null, {});
  }
};
