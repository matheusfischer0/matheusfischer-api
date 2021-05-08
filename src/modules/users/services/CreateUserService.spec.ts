import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import AppError from '@shared/errors/AppError';

import CreateUserService from './CreateUserService';
import FakeHashProvider from '../providers/HashProviders/fakes/FakeHashProvider';
describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    const user = await createUser.execute({
      name: 'Usuario XYZ',
      email: 'jonhdoe@example.com.br',
      password: 'abcd1234',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create new user with same email from another', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    await createUser.execute({
      name: 'Usuario XYZ',
      email: 'jonhdoe@example.com.br',
      password: 'abcd1234',
    });

    expect(
      createUser.execute({
        name: 'Usuario XYZ',
        email: 'jonhdoe@example.com.br',
        password: 'abcd1234',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
