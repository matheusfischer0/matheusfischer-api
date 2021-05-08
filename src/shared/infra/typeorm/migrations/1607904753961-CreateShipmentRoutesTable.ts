import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateShipmentRoutesTable1607904753961 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name:'shipment_routes',
          columns:[
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'id_shipment_from_city',
              type: 'varchar',
            },
            {
              name: 'id_shipment_to_city',
              type: 'varchar',
            },
            {
              name: 'price',
              type: 'numeric',
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            },
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('shipment_routes');
    }

}
