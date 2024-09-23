const Sequelize = require('sequelize');
const config = require('../config/config.json')['development'];

const sequelize = new Sequelize(config.database, config.username, config.password, { host: config.host, dialect: config.dialect });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./user')(sequelize, Sequelize);
db.pet = require('./pet')(sequelize, Sequelize);
db.publication = require('./publication')(sequelize, Sequelize);
db.comment = require('./comment')(sequelize, Sequelize);
db.reaction = require('./reaction')(sequelize, Sequelize);

db.user.hasMany(db.pet, { foreignKey: 'user_id' });
db.user.hasMany(db.post, { foreignKey: 'user_id' });
db.user.hasMany(db.comment, { foreignKey: 'user_id' });
db.user.hasMany(db.reaction, { foreignKey: 'user_id' });

db.pet.belongsTo(db.user, { foreignKey: 'user_id' });

db.publication.belongsTo(db.user, { foreignKey: 'user_id' });
db.publicacion.hasMany(db.Comment, { foreignKey: 'id_publicacion' });
db.publicacion.hasMany(db.reaction, { foreignKey: 'id_publicacion' });

db.comment.belongsTo(db.publicacion, { foreignKey : 'id_publicacion' });
db.comentario.belongsTo(db.usuario, { foreignKey: 'id_usuario' });

db.reaccion.belongsTo(db.Publication, { foreignKey: 'id_publicacion' });
db.reaccion.belongsTo (db.user, { foreignKey: 'user_id' });

module.exports = db;