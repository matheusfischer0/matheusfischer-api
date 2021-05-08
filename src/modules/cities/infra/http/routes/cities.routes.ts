import { Router } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import CitiesController from '../controllers/CitiesController';

const citiesController = new CitiesController();

const citiesRouter = Router();
citiesRouter.get('/', citiesController.list);

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
citiesRouter.use(ensureAuthenticated);

citiesRouter.post('/', citiesController.create);

export default citiesRouter;
