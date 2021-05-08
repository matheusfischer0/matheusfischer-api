"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _ShipmentRoute = _interopRequireDefault(require("../entities/ShipmentRoute"));

var _tsyringe = require("tsyringe");

var _dec, _dec2, _dec3, _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ShipmentRoutesRepository = (_dec = (0, _tsyringe.injectable)(), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", []), _dec(_class = _dec2(_class = _dec3(_class = (_temp = class ShipmentRoutesRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_ShipmentRoute.default);
  }

  async findShipmentsByFromCity(cityIdFrom) {
    const findShipments = await this.ormRepository.find({
      where: {
        id_shipment_from_city: cityIdFrom
      }
    });
    return findShipments;
  }

  async findShipment(cityIdFrom, cityIdTo) {
    const findShipment = await this.ormRepository.findOne({
      where: {
        id_shipment_from_city: cityIdFrom,
        id_shipment_to_city: cityIdTo
      }
    });
    return findShipment;
  }

  async create({
    id_shipment_from_city,
    id_shipment_to_city,
    price
  }) {
    const shipmentRoute = this.ormRepository.create({
      id_shipment_from_city,
      id_shipment_to_city,
      price
    });
    await this.ormRepository.save(shipmentRoute);
    return shipmentRoute;
  }

}, _temp)) || _class) || _class) || _class);
var _default = ShipmentRoutesRepository;
exports.default = _default;