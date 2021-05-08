"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _City = _interopRequireDefault(require("../../infra/typeorm/entities/City"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FakeCitiesRepository {
  constructor() {
    this.cities = [];
  }

  async list() {
    return this.cities;
  }

  async findByName(name) {
    const findCity = this.cities.find(city => city.name === name);
    return findCity;
  }

  async create({
    name,
    state
  }) {
    const city = new _City.default();
    Object.assign(city, {
      id: (0, _uuid.v4)(),
      name,
      state
    });
    this.cities.push(city);
    return city;
  }

}

var _default = FakeCitiesRepository;
exports.default = _default;