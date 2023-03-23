'use strict';

const priorities = ['HIGH', 'MEDIUM', 'LOW'].map(priority => ({
  name: priority
}));

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('priorities', priorities);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('priorities', null, {});
  }
};
