import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import { PetController} from '../controllers/animalsController';
import knex from '../instances/mysql';

export const home = async (req: Request, res: Response) => {
    let list = await PetController.getAll();
    let types = await PetController.getType();
    // console.log(list)
    res.render('pages/page', {
        menu: createMenuObject('all'),
        types: types.data,
        list: list.data
    });
}

export const getFromType = async (req: Request, res: Response) => {
    const type = req.params.type
    let list = await PetController.getByType(type);
    let types = await PetController.getType();

    res.render('pages/page', {
        list: list.data,
        types: types.data
    });
}

export const register = async (req: Request, res: Response) => {
    res.render('/register')
}

export const login = async (req: Request, res: Response) => {
    res.render('/login')
}
// export const fishes = (req: Request, res: Response) => {
//     let list = AllPet.getFromType('fish');

//     res.render('pages/page', {
//         menu: createMenuObject('fish'),
//         banner: {
//             title : 'Peixes',
//             background : 'banner_fish.jpg',
//         },
//         list
//     });    
// }
// export const cats = (req: Request, res: Response) => {
//     let list = AllPet.getFromType('cat');

//     res.render('pages/page', {
//         menu: createMenuObject('cat'),
//         banner: {
//             title : 'Gatos',
//             background : 'banner_cat.jpg',
//         },
//         list
//     })
// }

// export const caneta = (req: Request, res: Response) => {
//     let list = AllPet.getFromType('caneta');

//     res.render('pages/page', {
//         menu: createMenuObject('caneta'),
//         banner: {
//             title : 'Canetas',
//             background : 'banner_caneta.jpeg',
//         },
//         list
//     })
// }