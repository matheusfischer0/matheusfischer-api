import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeStorageProvider from '@shared/containers/providers/StorageProvider/fakes/FakeStorageProvider';
import UpdateUserAvatarService from './UpdateUserAvatarService';

describe('UpdateUserAvatar', () => {
  it('should be able update user avatar', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeStorageProvider = new FakeStorageProvider();
    const updatedUserAvatar = new UpdateUserAvatarService(
      fakeUsersRepository,
      fakeStorageProvider,
    );

    const user = await fakeUsersRepository.create({
      name: 'jonh due',
      email: 'johndue@example.com',
      password: '1234',
    });

    await updatedUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'avatar.jpg',
    });

    expect(user.avatar).toBe('avatar.jpg');
  });

  it('should be able delete old file when updating user avatar', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeStorageProvider = new FakeStorageProvider();

    const deleteFile = jest.spyOn(fakeStorageProvider, 'deleteFile');

    const updatedUserAvatar = new UpdateUserAvatarService(
      fakeUsersRepository,
      fakeStorageProvider,
    );

    const user = await fakeUsersRepository.create({
      name: 'jonh due',
      email: 'johndue@example.com',
      password: '1234',
    });

    await updatedUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'avatar.jpg',
    });

    await updatedUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'avatar2.jpg',
    });

    expect(deleteFile).toHaveBeenCalledWith('avatar.jpg');
    expect(user.avatar).toBe('avatar2.jpg');
  });

  it('should not be able update non existing user avatar', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeStorageProvider = new FakeStorageProvider();
    const updatedUserAvatar = new UpdateUserAvatarService(
      fakeUsersRepository,
      fakeStorageProvider,
    );

    expect(
      updatedUserAvatar.execute({
        user_id: 'non-existing-uses',
        avatarFilename: 'avatar.jpg',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
