import knex from '../instances/mysql'

export const registrar = {
    getName: async() => {
        try {
            const list= await knex('')
            return {sucess: true, data: list}
        } catch (e) {
            return {sucess: false, error: e}
        }
    },
}