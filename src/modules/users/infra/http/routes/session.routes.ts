import { Router } from 'express';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import SessionsControllers from '../controllers/SessionsControllers';

const sessionsControllers = new SessionsControllers;
const sessionsRouter = Router();

sessionsRouter.post('/', sessionsControllers.create);

export default sessionsRouter;
