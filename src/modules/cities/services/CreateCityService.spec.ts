import FakeCitiesRepository from '../repositories/fakes/FakeCitiesRepository';
import AppError from '@shared/errors/AppError';

import CreateCityService from './CreateCityService';
describe('CreateCity', () => {
  it('should be able to create a new city', async () => {
    const fakeCityRepository = new FakeCitiesRepository();
    const createCity = new CreateCityService(fakeCityRepository);

    const city = await createCity.execute({
      name: 'Minha Cidade',
      state: 'ZX',
    });

    expect(city).toHaveProperty('id');
    expect(city.name).toBe('Minha Cidade');
  });
  it('should not be able to create a two equal cities', async () => {
    const fakeCityRepository = new FakeCitiesRepository();
    const createCity = new CreateCityService(fakeCityRepository);

    await createCity.execute({
      name: 'Minha Cidade',
      state: 'ZX',
    });

    expect(
      createCity.execute({
        name: 'Minha Cidade',
        state: 'ZX',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
