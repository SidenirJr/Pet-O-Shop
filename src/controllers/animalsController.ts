import { sequelize } from '../instances/mysql'

//Todos os animais registrados

export const AllPet = {

    getFromId: async ( type: string) => {
        try {
            const animalsid = 'SELECT id FROM animals';
            let list = await sequelize.query(animalsid)
            return {sucess:true, data: list}
        } catch (e) {
        return {sucess:false, error: e};
        }
    },

    getAll: async() => {
        try {
            const allanimals = 'SELECT * FROM animals';
            const list = await sequelize.query(allanimals)
            return {sucess: true, data: list}
        } catch (e) {
            return {sucess: false, error: e}
        }
    },

    getFromType: async( type: string) => {
        try{
        const animalstype = 'SELECT type FROM animals';
        let list = await sequelize.query(animalstype)
        return {sucess: true, data: list}
    } catch (e) {
        return {sucess:false, error: e}
    }
},

    getFromName: async ( type: string) => {
        try {
            const animalsname = 'SELECT name FROM animals';
            let list = await sequelize.query(animalsname)
            return {sucess:true, data: list}
        } catch (e) {
            return {sucess:false, error: e};
        }
    },

    getFromSex: async ( type: string) => {
        try {
            const animalssex = 'SELECT sex FROM animals';
            let list = await sequelize.query(animalssex)
            return {sucess:true, data: list}
        } catch (e) {
            return {sucess:false, error: e};
        }
    },
};

//exportando a tabela com os tipos de animais.

export const Types = {
    type: async (type: number) => {
        try{
            const type = 'SELECT id FROM type';
            let list = await sequelize.query(type)
            return {sucess:true, data: list}
        } catch (e) {
            return {sucess:false, error: e}
        }   
    }
};