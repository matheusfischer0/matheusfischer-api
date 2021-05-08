"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ShipmentsRoutesController = _interopRequireDefault(require("../controllers/ShipmentsRoutesController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const shipmentsRoutesController = new _ShipmentsRoutesController.default();
const shipmentsRoutesRoutes = (0, _express.Router)(); // import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
// shipmentsRoutesRoutes.use(ensureAuthenticated);

shipmentsRoutesRoutes.post('/', shipmentsRoutesController.create);
var _default = shipmentsRoutesRoutes;
exports.default = _default;