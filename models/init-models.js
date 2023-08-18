var DataTypes = require("sequelize").DataTypes;
var _comentario = require("./comentario");
var _evento = require("./evento");
var _evento_comentario = require("./evento_comentario");
var _evento_like = require("./evento_like");
var _like = require("./like");
var _publicacion = require("./publicacion");
var _publicacion_comentario = require("./publicacion_comentario");
var _publicacion_like = require("./publicacion_like");
var _usuario = require("./usuario");
var _usuario_comentario = require("./usuario_comentario");
var _usuario_evento = require("./usuario_evento");
var _usuario_like = require("./usuario_like");
var _usuario_publicacion = require("./usuario_publicacion");

function initModels(sequelize) {
  var comentario = _comentario(sequelize, DataTypes);
  var evento = _evento(sequelize, DataTypes);
  var evento_comentario = _evento_comentario(sequelize, DataTypes);
  var evento_like = _evento_like(sequelize, DataTypes);
  var like = _like(sequelize, DataTypes);
  var publicacion = _publicacion(sequelize, DataTypes);
  var publicacion_comentario = _publicacion_comentario(sequelize, DataTypes);
  var publicacion_like = _publicacion_like(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);
  var usuario_comentario = _usuario_comentario(sequelize, DataTypes);
  var usuario_evento = _usuario_evento(sequelize, DataTypes);
  var usuario_like = _usuario_like(sequelize, DataTypes);
  var usuario_publicacion = _usuario_publicacion(sequelize, DataTypes);

  evento_comentario.belongsTo(comentario, { as: "comentario_idcomentario_comentario", foreignKey: "comentario_idcomentario"});
  comentario.hasMany(evento_comentario, { as: "evento_comentarios", foreignKey: "comentario_idcomentario"});
  publicacion_comentario.belongsTo(comentario, { as: "comentario_idcomentario_comentario", foreignKey: "comentario_idcomentario"});
  comentario.hasMany(publicacion_comentario, { as: "publicacion_comentarios", foreignKey: "comentario_idcomentario"});
  usuario_comentario.belongsTo(comentario, { as: "comentario_idcomentario_comentario", foreignKey: "comentario_idcomentario"});
  comentario.hasMany(usuario_comentario, { as: "usuario_comentarios", foreignKey: "comentario_idcomentario"});
  evento_comentario.belongsTo(evento, { as: "evento_idevento_evento", foreignKey: "evento_idevento"});
  evento.hasMany(evento_comentario, { as: "evento_comentarios", foreignKey: "evento_idevento"});
  evento_like.belongsTo(evento, { as: "evento_idevento_evento", foreignKey: "evento_idevento"});
  evento.hasMany(evento_like, { as: "evento_likes", foreignKey: "evento_idevento"});
  usuario_evento.belongsTo(evento, { as: "evento_idevento_evento", foreignKey: "evento_idevento"});
  evento.hasMany(usuario_evento, { as: "usuario_eventos", foreignKey: "evento_idevento"});
  evento_like.belongsTo(like, { as: "like_idlike_like", foreignKey: "like_idlike"});
  like.hasMany(evento_like, { as: "evento_likes", foreignKey: "like_idlike"});
  publicacion_like.belongsTo(like, { as: "like_idlike_like", foreignKey: "like_idlike"});
  like.hasMany(publicacion_like, { as: "publicacion_likes", foreignKey: "like_idlike"});
  usuario_like.belongsTo(like, { as: "like_idlike_like", foreignKey: "like_idlike"});
  like.hasMany(usuario_like, { as: "usuario_likes", foreignKey: "like_idlike"});
  publicacion_comentario.belongsTo(publicacion, { as: "publicacion_idpublicacion_publicacion", foreignKey: "publicacion_idpublicacion"});
  publicacion.hasMany(publicacion_comentario, { as: "publicacion_comentarios", foreignKey: "publicacion_idpublicacion"});
  publicacion_like.belongsTo(publicacion, { as: "publicacion_idpublicacion_publicacion", foreignKey: "publicacion_idpublicacion"});
  publicacion.hasMany(publicacion_like, { as: "publicacion_likes", foreignKey: "publicacion_idpublicacion"});
  usuario_publicacion.belongsTo(publicacion, { as: "publicacion_idpublicacion_publicacion", foreignKey: "publicacion_idpublicacion"});
  publicacion.hasMany(usuario_publicacion, { as: "usuario_publicacions", foreignKey: "publicacion_idpublicacion"});
  usuario_comentario.belongsTo(usuario, { as: "usuario_idusuario_usuario", foreignKey: "usuario_idusuario"});
  usuario.hasMany(usuario_comentario, { as: "usuario_comentarios", foreignKey: "usuario_idusuario"});
  usuario_evento.belongsTo(usuario, { as: "usuario_idusuario_usuario", foreignKey: "usuario_idusuario"});
  usuario.hasMany(usuario_evento, { as: "usuario_eventos", foreignKey: "usuario_idusuario"});
  usuario_like.belongsTo(usuario, { as: "usuario_idusuario_usuario", foreignKey: "usuario_idusuario"});
  usuario.hasMany(usuario_like, { as: "usuario_likes", foreignKey: "usuario_idusuario"});
  usuario_publicacion.belongsTo(usuario, { as: "usuario_idusuario_usuario", foreignKey: "usuario_idusuario"});
  usuario.hasMany(usuario_publicacion, { as: "usuario_publicacions", foreignKey: "usuario_idusuario"});

  return {
    comentario,
    evento,
    evento_comentario,
    evento_like,
    like,
    publicacion,
    publicacion_comentario,
    publicacion_like,
    usuario,
    usuario_comentario,
    usuario_evento,
    usuario_like,
    usuario_publicacion,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
