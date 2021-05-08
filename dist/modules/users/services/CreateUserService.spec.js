"use strict";

var _FakeUsersRepository = _interopRequireDefault(require("../repositories/fakes/FakeUsersRepository"));

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _CreateUserService = _interopRequireDefault(require("./CreateUserService"));

var _FakeHashProvider = _interopRequireDefault(require("../providers/HashProviders/fakes/FakeHashProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new _FakeUsersRepository.default();
    const fakeHashProvider = new _FakeHashProvider.default();
    const createUser = new _CreateUserService.default(fakeUsersRepository, fakeHashProvider);
    const user = await createUser.execute({
      name: 'Usuario XYZ',
      email: 'jonhdoe@example.com.br',
      password: 'abcd1234'
    });
    expect(user).toHaveProperty('id');
  });
  it('should not be able to create new user with same email from another', async () => {
    const fakeUsersRepository = new _FakeUsersRepository.default();
    const fakeHashProvider = new _FakeHashProvider.default();
    const createUser = new _CreateUserService.default(fakeUsersRepository, fakeHashProvider);
    await createUser.execute({
      name: 'Usuario XYZ',
      email: 'jonhdoe@example.com.br',
      password: 'abcd1234'
    });
    expect(createUser.execute({
      name: 'Usuario XYZ',
      email: 'jonhdoe@example.com.br',
      password: 'abcd1234'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
});