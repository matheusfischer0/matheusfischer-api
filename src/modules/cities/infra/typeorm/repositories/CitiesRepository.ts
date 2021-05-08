import { getRepository, Repository } from 'typeorm';

import ICitiesRepository from '@modules/cities/repositories/ICitiesRepository';

import ICreateCityDTO from '@modules/cities/dtos/ICreateCityDTO';
import City from '../entities/City';
import { injectable } from 'tsyringe';
@injectable()

class CitiesRepository implements ICitiesRepository {
  private ormRepository: Repository<City>;

  constructor() {
    this.ormRepository = getRepository(City);
  }

  public async list(): Promise<City[] | undefined> {
    const findCities = await this.ormRepository.find();

    return findCities;
  }

  public async findByName(name: string): Promise<City | undefined> {
    const findCity = await this.ormRepository.findOne({
      where: { name: name },
    });

    return findCity;
  }

  public async create({
    name,
    state,
  }: ICreateCityDTO): Promise<City> {
    const city = this.ormRepository.create({ name, state });
    await this.ormRepository.save(city);
    return city;
  }
}

export default CitiesRepository;
