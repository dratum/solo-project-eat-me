/** @type {import('sequelize-cli').Migration} */
const admin = require('../../data-for-seed/admin-data');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', admin, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
