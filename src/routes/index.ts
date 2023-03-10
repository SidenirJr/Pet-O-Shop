import { Router } from 'express';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

const router = Router();

//Constando endereço da pagina.
router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/fishes', PageController.fishes);
router.get('/cats', PageController.cats);
router.get('/caneta', PageController.caneta)
router.get('/search', SearchController.search);
router.get('/login', PageController.login);
router.get('/register', PageController.register);

export default router;