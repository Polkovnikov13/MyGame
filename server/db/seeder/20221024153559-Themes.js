module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Themes', [{
      name: 'Легкие',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Средние',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Сложные',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Супер Сложные',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
