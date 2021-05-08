"use strict";

var _tsyringe = require("tsyringe");

require("../../modules/users/providers");

require("./providers");

var _UsersRepository = _interopRequireDefault(require("../../modules/users/infra/typeorm/repositories/UsersRepository"));

var _CitiesRepository = _interopRequireDefault(require("../../modules/cities/infra/typeorm/repositories/CitiesRepository"));

var _ShipmentRoutesRepository = _interopRequireDefault(require("../../modules/shipmentRoutes/infra/typeorm/repositories/ShipmentRoutesRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tsyringe.container.registerSingleton('UsersRepository', _UsersRepository.default);

_tsyringe.container.registerSingleton('CitiesRepository', _CitiesRepository.default);

_tsyringe.container.registerSingleton('ShipmentRoutesRepository', _ShipmentRoutesRepository.default);