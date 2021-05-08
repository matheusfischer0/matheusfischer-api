import { Request, Response } from "express";
import { container } from "tsyringe";

import CreateShipmentRouteService from "@modules/shipmentRoutes/services/CreateShipmentRouteService";

export default class ShipmentsController {
  public async create(request:Request,response:Response):Promise<Response>{
      const { id_shipment_from_city, id_shipment_to_city, price } = request.body;

      const createShipmentRoute = container.resolve(CreateShipmentRouteService);

      const shipment = await createShipmentRoute.execute({
        id_shipment_from_city,
        id_shipment_to_city,
        price
      });

      return response.json(shipment);
  }
}
