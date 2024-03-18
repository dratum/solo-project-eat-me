const dinner = require('../../data-for-seed/dinner-data');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('dinners', dinner, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('dinners', null, {});
  },
};
