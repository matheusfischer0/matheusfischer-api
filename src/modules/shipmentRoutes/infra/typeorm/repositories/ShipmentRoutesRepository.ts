import { getRepository, Repository } from 'typeorm';

import IShipmentRoutesRepository from '@modules/shipmentRoutes/repositories/IShipmentRoutesRepository';

import ICreateShipmentRoutesDTO from '@modules/shipmentRoutes/dtos/ICreateShipmentRoutesDTO';
import ShipmentRoute from '../entities/ShipmentRoute';
import { injectable } from 'tsyringe';


@injectable()
class ShipmentRoutesRepository implements IShipmentRoutesRepository {
  private ormRepository: Repository<ShipmentRoute>;

  constructor() {
    this.ormRepository = getRepository(ShipmentRoute);
  }

  public async findShipmentsByFromCity(cityIdFrom: string): Promise<ShipmentRoute[] | undefined> {
    const findShipments = await this.ormRepository.find({
      where: { id_shipment_from_city: cityIdFrom },
    });

    return findShipments;
  }

  public async findShipment(cityIdFrom: string, cityIdTo: string): Promise<ShipmentRoute | undefined> {
    const findShipment = await this.ormRepository.findOne({
      where: { id_shipment_from_city: cityIdFrom , id_shipment_to_city: cityIdTo  },
    });

    return findShipment;
  }

  public async create({
    id_shipment_from_city,
    id_shipment_to_city,
    price,
  }: ICreateShipmentRoutesDTO): Promise<ShipmentRoute> {
    const shipmentRoute = this.ormRepository.create({
      id_shipment_from_city,
      id_shipment_to_city,
      price,
    });
    await this.ormRepository.save(shipmentRoute);
    return shipmentRoute;
  }
}

export default ShipmentRoutesRepository;
