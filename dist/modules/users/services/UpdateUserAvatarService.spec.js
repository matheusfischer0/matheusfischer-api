"use strict";

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _FakeUsersRepository = _interopRequireDefault(require("../repositories/fakes/FakeUsersRepository"));

var _FakeStorageProvider = _interopRequireDefault(require("../../../shared/containers/providers/StorageProvider/fakes/FakeStorageProvider"));

var _UpdateUserAvatarService = _interopRequireDefault(require("./UpdateUserAvatarService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('UpdateUserAvatar', () => {
  it('should be able update user avatar', async () => {
    const fakeUsersRepository = new _FakeUsersRepository.default();
    const fakeStorageProvider = new _FakeStorageProvider.default();
    const updatedUserAvatar = new _UpdateUserAvatarService.default(fakeUsersRepository, fakeStorageProvider);
    const user = await fakeUsersRepository.create({
      name: 'jonh due',
      email: 'johndue@example.com',
      password: '1234'
    });
    await updatedUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'avatar.jpg'
    });
    expect(user.avatar).toBe('avatar.jpg');
  });
  it('should not be able update non existing user avatar', async () => {
    const fakeUsersRepository = new _FakeUsersRepository.default();
    const fakeStorageProvider = new _FakeStorageProvider.default();
    const updatedUserAvatar = new _UpdateUserAvatarService.default(fakeUsersRepository, fakeStorageProvider);
    expect(updatedUserAvatar.execute({
      user_id: 'non-existing-uses',
      avatarFilename: 'avatar.jpg'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
});