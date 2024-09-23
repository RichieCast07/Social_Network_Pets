module.exports = (sequelize, DataTypes) => {
    const Pets = sequelize.define('Pets', {
      id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      race: {
        type: DataTypes.STRING(50),
        allowNull: false
      }
    }, {
      tableName: 'pets',
      timestamps: false
    });
  
    return Pets;
  };
  