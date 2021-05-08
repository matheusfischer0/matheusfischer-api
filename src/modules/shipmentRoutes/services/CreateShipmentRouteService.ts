import { startOfHour } from 'date-fns';
import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ShipmentRoute from '@modules/shipmentRoutes/infra/typeorm/entities/ShipmentRoute';
import IShipmentRoutesRepository from '../repositories/IShipmentRoutesRepository';

interface IRequest {
  id_shipment_from_city: string;
  id_shipment_to_city: string;
  price: number;
}

@injectable()
class CreateShipmentRouteService {
  constructor(
    @inject('ShipmentRoutesRepository')
    private shipmentRoutesRepository: IShipmentRoutesRepository,
  ) {}

  public async execute({ id_shipment_from_city, id_shipment_to_city, price }: IRequest): Promise<ShipmentRoute> {

    const findShipment = await this.shipmentRoutesRepository.findShipment(
      id_shipment_from_city, id_shipment_to_city
    );

    if (findShipment) {
      throw new AppError('This shipment is already exists');
    }

    const shipment = this.shipmentRoutesRepository.create({
      id_shipment_from_city,
      id_shipment_to_city,
      price,
    });

    return shipment;
  }
}

export default CreateShipmentRouteService;
