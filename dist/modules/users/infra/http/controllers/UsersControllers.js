"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _CreateUserService = _interopRequireDefault(require("../../../services/CreateUserService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UsersControllers {
  async create(request, response) {
    const {
      name,
      email,
      password
    } = request.body;

    const createUser = _tsyringe.container.resolve(_CreateUserService.default);

    const user = await createUser.execute({
      name,
      email,
      password
    });
    delete user.password;
    return response.json({
      user
    });
  }

}

exports.default = UsersControllers;