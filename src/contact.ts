import db from './db'
import { DataTypes } from 'sequelize';

const Contact = db.define('contacts', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: DataTypes.STRING,
    number: {
        type: DataTypes.BIGINT,
        unique:true,
    },
})


export default Contact