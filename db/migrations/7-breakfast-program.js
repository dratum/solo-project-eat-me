/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Breakfast_programs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      breakfast_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'breakfasts',
          key: 'id',
        },
      },
      program_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Programs',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Breakfast_programs');
  },
};
