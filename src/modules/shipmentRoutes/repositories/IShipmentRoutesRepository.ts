import ShipmentRoute from '../infra/typeorm/entities/ShipmentRoute';
import ICreateShipmentRoutesDTO from '../dtos/ICreateShipmentRoutesDTO';

export default interface IShipmentRoutesRepository {
  create({
    id_shipment_from_city,
    id_shipment_to_city,
    price}: ICreateShipmentRoutesDTO): Promise<ShipmentRoute>;
  findShipmentsByFromCity(cityIdFrom: string): Promise<ShipmentRoute[] | undefined>;
  findShipment(cityIdFrom: string, cityIdTo: string): Promise<ShipmentRoute | undefined>;
}
