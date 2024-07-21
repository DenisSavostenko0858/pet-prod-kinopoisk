import Router from 'express';
import adminController from '../controllers/adminController';

const router = Router();

router.get('/movies', adminController.getMovies);
router.get('/users', adminController.getUsers);

router.post('/dellmovies/:id', adminController.deleteMovies);
router.post('/addmovies', adminController.addMovies);

export default router;