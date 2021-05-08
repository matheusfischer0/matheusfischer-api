"use strict";

var _FakeUsersRepository = _interopRequireDefault(require("../repositories/fakes/FakeUsersRepository"));

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _AuthenticateUserService = _interopRequireDefault(require("./AuthenticateUserService"));

var _CreateUserService = _interopRequireDefault(require("./CreateUserService"));

var _FakeHashProvider = _interopRequireDefault(require("../providers/HashProviders/fakes/FakeHashProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('AuthenticateUser', () => {
  it('should be able authenticate', async () => {
    const fakeUsersRepository = new _FakeUsersRepository.default();
    const fakeHashProvider = new _FakeHashProvider.default();
    const createUser = new _CreateUserService.default(fakeUsersRepository, fakeHashProvider);
    const authenticateUser = new _AuthenticateUserService.default(fakeUsersRepository, fakeHashProvider);
    const user = await createUser.execute({
      name: 'Usuario XYZ',
      email: 'jonhdoe@example.com.br',
      password: 'abcd1234'
    });
    const response = await authenticateUser.execute({
      email: user.email,
      password: 'abcd1234'
    });
    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });
  it('should not be able to authenticate with non existing user', async () => {
    const fakeUsersRepository = new _FakeUsersRepository.default();
    const fakeHashProvider = new _FakeHashProvider.default();
    const authenticateUser = new _AuthenticateUserService.default(fakeUsersRepository, fakeHashProvider);
    expect(authenticateUser.execute({
      email: 'email@teste.com.br',
      password: 'abcd1234'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
  it('should not be able to authenticate with wrong password', async () => {
    const fakeUsersRepository = new _FakeUsersRepository.default();
    const fakeHashProvider = new _FakeHashProvider.default();
    const createUser = new _CreateUserService.default(fakeUsersRepository, fakeHashProvider);
    const authenticateUser = new _AuthenticateUserService.default(fakeUsersRepository, fakeHashProvider);
    const user = await createUser.execute({
      name: 'Usuario XYZ',
      email: 'jonhdoe@example.com.br',
      password: 'abcd1234'
    });
    expect(authenticateUser.execute({
      email: user.email,
      password: '1234abcd'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
});