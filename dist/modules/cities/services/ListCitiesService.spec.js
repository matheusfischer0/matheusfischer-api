"use strict";

var _FakeCitiesRepository = _interopRequireDefault(require("../repositories/fakes/FakeCitiesRepository"));

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _CreateCityService = _interopRequireDefault(require("./CreateCityService"));

var _ListCitiesService = _interopRequireDefault(require("./ListCitiesService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ListCities', () => {
  it('should be able to list cities', async () => {
    const fakeCityRepository = new _FakeCitiesRepository.default();
    const createCity = new _CreateCityService.default(fakeCityRepository);
    const listCities = new _ListCitiesService.default(fakeCityRepository);
    await createCity.execute({
      name: 'CidadeA',
      state: 'ZX'
    });
    await createCity.execute({
      name: 'CidadeB',
      state: 'ZX'
    });
    const cities = await listCities.execute({});
    expect(cities.length).toBeGreaterThan(0);
  });
  it('should be able throw error', async () => {
    const fakeCityRepository = new _FakeCitiesRepository.default();
    const listCities = new _ListCitiesService.default(fakeCityRepository);
    expect(listCities.execute({})).rejects.toBeInstanceOf(_AppError.default);
  });
  it('should be able return empty array if there is no city', async () => {
    const fakeCityRepository = new _FakeCitiesRepository.default();
    const listCities = new _ListCitiesService.default(fakeCityRepository);
    const cities = await listCities.execute({});
    expect(cities.length).toBe(0);
  });
});