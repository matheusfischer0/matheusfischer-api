"use strict";

var _FakeCitiesRepository = _interopRequireDefault(require("../repositories/fakes/FakeCitiesRepository"));

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _CreateCityService = _interopRequireDefault(require("./CreateCityService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CreateCity', () => {
  it('should be able to create a new city', async () => {
    const fakeCityRepository = new _FakeCitiesRepository.default();
    const createCity = new _CreateCityService.default(fakeCityRepository);
    const city = await createCity.execute({
      name: 'Minha Cidade',
      state: 'ZX'
    });
    expect(city).toHaveProperty('id');
    expect(city.name).toBe('Minha Cidade');
  });
  it('should not be able to create a two equal cities', async () => {
    const fakeCityRepository = new _FakeCitiesRepository.default();
    const createCity = new _CreateCityService.default(fakeCityRepository);
    await createCity.execute({
      name: 'Minha Cidade',
      state: 'ZX'
    });
    expect(createCity.execute({
      name: 'Minha Cidade',
      state: 'ZX'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
});