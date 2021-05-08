import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import City from '@modules/cities/infra/typeorm/entities/City';

/**
 * Relacionamentos
 * => OneToOne
 * => OneToMany
 * => ManyToMany
 */

@Entity('shipment_routes')
class ShipmentRoutes {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  id_shipment_from_city: string;

  @ManyToOne(() => City)
  @JoinColumn({ name: 'id_shipment_from_city' })
  city_from:City

  @Column()
  id_shipment_to_city: string;

  @ManyToOne(() => City)
  @JoinColumn({ name: 'id_shipment_to_city' })
  city_to:City

  @Column()
  price: number;

  @Column('timestamp with time zone')
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ShipmentRoutes;
