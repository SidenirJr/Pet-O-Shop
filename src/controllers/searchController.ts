import { Request, Response } from 'express';
import { AllPet } from '../controllers/animalsController'
import { createMenuObject } from '../helpers/createMenuObject';

    export const search = (req: Request, res: Response) => {
        let query: string = req.query.q as string;

        if(!query) {
            res.redirect('/');
            return;
        }

        let list = AllPet.getFromName(query);

    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query
    });
    }