"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateShipmentRoutesTable1607904753961 = void 0;

var _typeorm = require("typeorm");

class CreateShipmentRoutesTable1607904753961 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'shipment_routes',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'id_shipment_from_city',
        type: 'varchar'
      }, {
        name: 'id_shipment_to_city',
        type: 'varchar'
      }, {
        name: 'price',
        type: 'numeric'
      }, {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()'
      }, {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()'
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('shipment_routes');
  }

}

exports.CreateShipmentRoutesTable1607904753961 = CreateShipmentRoutesTable1607904753961;