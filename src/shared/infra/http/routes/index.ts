import { Router } from 'express';

import citiesRoutes from '@modules/cities/infra/http/routes/cities.routes';
import shipmentsRoutes from '@modules/shipmentRoutes/infra/http/routes/shipmentRoutes.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/session.routes';

const routes = Router();
routes.use('/shipments/routes', shipmentsRoutes);
routes.use('/cities', citiesRoutes);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
