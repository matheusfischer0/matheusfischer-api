import FakeCitiesRepository from '../repositories/fakes/FakeCitiesRepository';
import AppError from '@shared/errors/AppError';

import CreateCityService from './CreateCityService';
import ListCitiesService from './ListCitiesService';
describe('ListCities', () => {
  it('should be able to list cities', async () => {
    const fakeCityRepository = new FakeCitiesRepository();
    const createCity = new CreateCityService(fakeCityRepository);
    const listCities = new ListCitiesService(fakeCityRepository);

    await createCity.execute({
      name: 'CidadeA',
      state: 'ZX',
    });
    await createCity.execute({
      name: 'CidadeB',
      state: 'ZX',
    });

    const cities = await listCities.execute({});

    expect(cities.length).toBeGreaterThan(0);
  });

  it('should be able throw error', async () => {
    const fakeCityRepository = new FakeCitiesRepository();
    const listCities = new ListCitiesService(fakeCityRepository);

    expect(listCities.execute({})).rejects.toBeInstanceOf(AppError);
  });

  it('should be able return empty array if there is no city', async () => {
    const fakeCityRepository = new FakeCitiesRepository();
    const listCities = new ListCitiesService(fakeCityRepository);

    const cities = await listCities.execute({});

    expect(cities.length).toBe(0);
  });
});
