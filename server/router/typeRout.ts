import Router from 'express';
import typeController from '../controllers/typeController'

const router = Router();

router.get('/types', typeController.getTypes);

router.post('/addtype', typeController.addType);
router.post('/delltype/:id', typeController.dellType);