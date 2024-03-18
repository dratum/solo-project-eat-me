const lunch = require('../../data-for-seed/lunch-data');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('lunches', lunch, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('lunches', null, {});
  },
};
