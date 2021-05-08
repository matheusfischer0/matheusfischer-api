import { Router } from 'express';

import ShipmentsRoutesController from '../controllers/ShipmentsRoutesController';

const shipmentsRoutesController = new ShipmentsRoutesController;

const shipmentsRoutesRoutes = Router();

// import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
// shipmentsRoutesRoutes.use(ensureAuthenticated);

shipmentsRoutesRoutes.post('/', shipmentsRoutesController.create);

export default shipmentsRoutesRoutes;
