import Router from 'express';
import brandController from '../controllers/brandController'

const router = Router();

router.get('/brands', brandController.getBrand);

router.post('/addbrand', brandController.addBrand);
router.post('/dellbrand/:id', brandController.dellBrand);

export default router;