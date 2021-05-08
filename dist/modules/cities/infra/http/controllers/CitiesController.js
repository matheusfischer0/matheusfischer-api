"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _CreateCityService = _interopRequireDefault(require("../../../services/CreateCityService"));

var _ListCitiesService = _interopRequireDefault(require("../../../services/ListCitiesService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CitiesController {
  async create(request, response) {
    const {
      name,
      state
    } = request.body;

    const createCity = _tsyringe.container.resolve(_CreateCityService.default);

    const city = await createCity.execute({
      name,
      state
    });
    return response.json(city);
  }

  async list(request, response) {
    const listCities = _tsyringe.container.resolve(_ListCitiesService.default);

    const cities = await listCities.execute({});
    return response.json(cities);
  }

}

exports.default = CitiesController;