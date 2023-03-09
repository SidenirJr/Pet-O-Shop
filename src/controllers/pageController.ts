import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import { Pet } from '../models/pets';
import { sequelize }from '../instances/mysql';

export const home = async (req: Request, res: Response) => {
    let list = await Pet.getAll();

    if (!list.success) {
        return res.status(200).json({error: list.error})
    }
    console.log(list.data)
    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title : 'Todos os animais',
            background : 'allanimals.jpg',
        },
        list: list.data
    });
}
export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');

    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: {
            title : 'Cachorros',
            background : 'banner_dog.jpg',
        },
        list
    });
}
export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');

    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner: {
            title : 'Peixes',
            background : 'banner_fish.jpg',
        },
        list
    });    
}
export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat');

    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: {
            title : 'Gatos',
            background : 'banner_cat.jpg',
        },
        list
    })
}

export const caneta = (req: Request, res: Response) => {
    let list = Pet.getFromType('caneta');

    res.render('pages/page', {
        menu: createMenuObject('caneta'),
        banner: {
            title : 'Canetas',
            background : 'banner_caneta.jpeg',
        },
        list
    })
}