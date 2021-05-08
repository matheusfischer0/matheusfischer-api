import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateCityService from "@modules/cities/services/CreateCityService";
import ListCitiesService from "@modules/cities/services/ListCitiesService";

export default class CitiesController {
  public async create(request:Request,response:Response):Promise<Response>{
      const { name, state } = request.body;
      const createCity = container.resolve(CreateCityService);

      const city = await createCity.execute({
        name,
        state,
      });

      return response.json(city);
  }

  public async list(request:Request,response:Response):Promise<Response>{
      const listCities = container.resolve(ListCitiesService);

      const cities = await listCities.execute({});

      return response.json(cities);
  }
}
