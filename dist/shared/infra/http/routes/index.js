"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _cities = _interopRequireDefault(require("../../../../modules/cities/infra/http/routes/cities.routes"));

var _shipmentRoutes = _interopRequireDefault(require("../../../../modules/shipmentRoutes/infra/http/routes/shipmentRoutes.routes"));

var _users = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/users.routes"));

var _session = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/session.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.use('/shipments/routes', _shipmentRoutes.default);
routes.use('/cities', _cities.default);
routes.use('/users', _users.default);
routes.use('/sessions', _session.default);
var _default = routes;
exports.default = _default;