const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Comments = sequelize.define('comments', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    author: {type: DataTypes.STRING},
    comment: {type: DataTypes.STRING},
    parentID: {type: DataTypes.INTEGER, allowNull: true}

})

module.exports = {
    Comments
}