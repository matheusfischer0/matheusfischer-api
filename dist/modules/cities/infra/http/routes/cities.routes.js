"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _CitiesController = _interopRequireDefault(require("../controllers/CitiesController"));

var _ensureAuthenticated = _interopRequireDefault(require("../../../../users/infra/http/middlewares/ensureAuthenticated"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const citiesController = new _CitiesController.default();
const citiesRouter = (0, _express.Router)();
citiesRouter.get('/', citiesController.list);
citiesRouter.use(_ensureAuthenticated.default);
citiesRouter.post('/', citiesController.create);
var _default = citiesRouter;
exports.default = _default;