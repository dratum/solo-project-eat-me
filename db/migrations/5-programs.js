/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Programs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      description: {
        type: Sequelize.STRING,
      },
      breakfast_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'breakfasts',
          key: 'id',
        },
      },
      lunch_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'lunches',
          key: 'id',
        },
      },
      dinner_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'dinners',
          key: 'id',
        },
      },
      kcal: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Programs');
  },
};
