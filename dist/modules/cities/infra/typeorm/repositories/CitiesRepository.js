"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _City = _interopRequireDefault(require("../entities/City"));

var _tsyringe = require("tsyringe");

var _dec, _dec2, _dec3, _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CitiesRepository = (_dec = (0, _tsyringe.injectable)(), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", []), _dec(_class = _dec2(_class = _dec3(_class = (_temp = class CitiesRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_City.default);
  }

  async list() {
    const findCities = await this.ormRepository.find();
    return findCities;
  }

  async findByName(name) {
    const findCity = await this.ormRepository.findOne({
      where: {
        name: name
      }
    });
    return findCity;
  }

  async create({
    name,
    state
  }) {
    const city = this.ormRepository.create({
      name,
      state
    });
    await this.ormRepository.save(city);
    return city;
  }

}, _temp)) || _class) || _class) || _class);
var _default = CitiesRepository;
exports.default = _default;