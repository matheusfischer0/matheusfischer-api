"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _ICitiesRepository = _interopRequireDefault(require("../repositories/ICitiesRepository"));

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateCityService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('CitiesRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ICitiesRepository.default === "undefined" ? Object : _ICitiesRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateCityService {
  constructor(citiesRepository) {
    this.citiesRepository = citiesRepository;
  }

  async execute({
    name,
    state
  }) {
    const findCityByName = await this.citiesRepository.findByName(name);

    if (findCityByName) {
      throw new _AppError.default('This city is already created');
    }

    const city = this.citiesRepository.create({
      name,
      state
    });
    return city;
  }

}) || _class) || _class) || _class) || _class);
var _default = CreateCityService;
exports.default = _default;