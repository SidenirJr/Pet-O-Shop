import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface animalInstance extends Model{
    id: number,
    name:string,
    type:string,
    color:string,
    sex:string,
}

export const animal = sequelize.define<animalInstance>("animals", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER, 
    },
    name: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.STRING
    },
    color: {
        type: DataTypes.STRING
    },
    sex: {
        type: DataTypes.STRING
    },
},{
    tableName:'animals',
    timestamps: false
});