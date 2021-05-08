import { v4 } from 'uuid';

import ICitiesRepository from '@modules/cities/repositories/ICitiesRepository';

import ICreateCityDTO from '@modules/cities/dtos/ICreateCityDTO';

import City from '../../infra/typeorm/entities/City';

class FakeCitiesRepository implements ICitiesRepository {
  private cities: City[] = [];

  public async list(): Promise<City[] | undefined> {
    return this.cities;
  }

  public async findByName(name: string): Promise<City | undefined> {
    const findCity = this.cities.find(city => city.name === name);

    return findCity;
  }

  public async create({ name, state }: ICreateCityDTO): Promise<City> {
    const city = new City();

    Object.assign(city, { id: v4(), name, state });

    this.cities.push(city);

    return city;
  }
}

export default FakeCitiesRepository;
