import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import UsersControllers from '../controllers/UsersControllers';
import UserAvatarController from '../controllers/UserAvatarController';

const userAvatarController = new UserAvatarController();
const usersControllers = new UsersControllers();
const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', usersControllers.create);

if (!uploadConfig.disable) {
  usersRouter.patch(
    '/avatar',
    ensureAuthenticated,
    upload.single('avatar'),
    userAvatarController.update,
  );
}

export default usersRouter;
