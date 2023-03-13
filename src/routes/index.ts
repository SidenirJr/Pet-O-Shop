import { Router } from 'express';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

const router = Router();

//Constando endereço da pagina.
router.get('/', PageController.home);
router.get('/pets', PageController.home);
router.get('/pets/:type', PageController.getFromType);
router.get('/login', PageController.login);
router.get('/register', PageController.register);

export default router;