const breakfast = require('../../data-for-seed/breakfast-data');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('breakfasts', breakfast, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('breakfasts', null, {});
  },
};
