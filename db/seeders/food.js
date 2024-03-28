/** @type {import('sequelize-cli').Migration} */
const food = require('../../data-for-seed/food-data');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Food', food, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
