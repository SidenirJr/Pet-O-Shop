import knex from '../instances/mysql'

//Todos os animais registrados

export const PetController = {
    getType: async() => {
        try {
            const list= await knex.select().from('type')
            return {sucess: true, data: list}
        } catch (e) {
            return {sucess: false, error: e}
        }
    },

    getAll: async() => {
        try {
            const list= await knex.select().from('animals')
            return {sucess: true, data: list}
        } catch (e) {
            return {sucess: false, error: e}
        }
    },

    getByType: async(type:string) => {
        try {
            const list=await knex.select('animals.*').from('animals').join('type', 'type.id', '=', 'animals.type').where({'type.name': type})
            return {sucess:true, data: list}
        } catch (e) {
            return {sucess: false, error: e}
        }
    },

}