"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _multer = _interopRequireDefault(require("multer"));

var _upload = _interopRequireDefault(require("../../../../../config/upload"));

var _UsersControllers = _interopRequireDefault(require("../controllers/UsersControllers"));

var _UserAvatarController = _interopRequireDefault(require("../controllers/UserAvatarController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userAvatarController = new _UserAvatarController.default();
const usersControllers = new _UsersControllers.default();
const usersRouter = (0, _express.Router)();
const upload = (0, _multer.default)(_upload.default);
usersRouter.post('/', usersControllers.create); // usersRouter.patch(
//   '/avatar',
//   ensureAuthenticated,
//   upload.single('avatar'),
//   userAvatarController.update,
// );

var _default = usersRouter;
exports.default = _default;