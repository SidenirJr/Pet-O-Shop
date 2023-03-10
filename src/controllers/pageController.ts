import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import { AllPet, Types } from '../controllers/animalsController';
import { sequelize }from '../instances/mysql';

export const home = async (req: Request, res: Response) => {
    let list = await AllPet.getAll();
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
    let list = AllPet.getFromType('dog');

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
    let list = AllPet.getFromType('fish');

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
    let list = AllPet.getFromType('cat');

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
    let list = AllPet.getFromType('caneta');

    res.render('pages/page', {
        menu: createMenuObject('caneta'),
        banner: {
            title : 'Canetas',
            background : 'banner_caneta.jpeg',
        },
        list
    })
}

export const register = (req: Request, res: Response) => {
    res.render('/register')
}

export const login = (req: Request, res: Response) => {
    res.render('/login')
}