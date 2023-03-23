'use strict';

const statuses = ['NOT STARTED', 'IN PROGRESS', 'COMPLETED'].map(status => ({
  name: status
}));

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('statuses', statuses);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('statuses', null, {});
  }
};
