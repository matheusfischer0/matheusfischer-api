"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCities1607904509253 = void 0;

var _typeorm = require("typeorm");

class CreateCities1607904509253 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'cities',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'name',
        type: 'varchar'
      }, {
        name: 'state',
        type: 'varchar'
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
    await queryRunner.dropTable('cities');
  }

}

exports.CreateCities1607904509253 = CreateCities1607904509253;