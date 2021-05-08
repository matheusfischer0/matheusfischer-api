"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _ICitiesRepository = _interopRequireDefault(require("../repositories/ICitiesRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateCityService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('CitiesRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ICitiesRepository.default === "undefined" ? Object : _ICitiesRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateCityService {
  constructor(citiesRepository) {
    this.citiesRepository = citiesRepository;
  }

  async execute({}) {
    const findCities = await this.citiesRepository.list();

    if (!findCities) {
      throw new _AppError.default('Error on list cities');
    }

    return findCities;
  }

}) || _class) || _class) || _class) || _class);
var _default = CreateCityService;
exports.default = _default;