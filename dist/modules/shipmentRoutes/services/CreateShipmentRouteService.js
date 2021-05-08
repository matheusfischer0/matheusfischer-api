"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _IShipmentRoutesRepository = _interopRequireDefault(require("../repositories/IShipmentRoutesRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateShipmentRouteService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ShipmentRoutesRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IShipmentRoutesRepository.default === "undefined" ? Object : _IShipmentRoutesRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateShipmentRouteService {
  constructor(shipmentRoutesRepository) {
    this.shipmentRoutesRepository = shipmentRoutesRepository;
  }

  async execute({
    id_shipment_from_city,
    id_shipment_to_city,
    price
  }) {
    const findShipment = await this.shipmentRoutesRepository.findShipment(id_shipment_from_city, id_shipment_to_city);

    if (findShipment) {
      throw new _AppError.default('This shipment is already exists');
    }

    const shipment = this.shipmentRoutesRepository.create({
      id_shipment_from_city,
      id_shipment_to_city,
      price
    });
    return shipment;
  }

}) || _class) || _class) || _class) || _class);
var _default = CreateShipmentRouteService;
exports.default = _default;