"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _CreateShipmentRouteService = _interopRequireDefault(require("../../../services/CreateShipmentRouteService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ShipmentsController {
  async create(request, response) {
    const {
      id_shipment_from_city,
      id_shipment_to_city,
      price
    } = request.body;

    const createShipmentRoute = _tsyringe.container.resolve(_CreateShipmentRouteService.default);

    const shipment = await createShipmentRoute.execute({
      id_shipment_from_city,
      id_shipment_to_city,
      price
    });
    return response.json(shipment);
  }

}

exports.default = ShipmentsController;