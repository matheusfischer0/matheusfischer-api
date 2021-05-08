import { inject, injectable } from 'tsyringe';

import City from '@modules/cities/infra/typeorm/entities/City';
import ICitiesRepository from '../repositories/ICitiesRepository';

import AppError from '@shared/errors/AppError';

interface IRequest {
  name: string;
  state: string;
}

@injectable()
class CreateCityService {
  constructor(
    @inject('CitiesRepository')
    private citiesRepository: ICitiesRepository,
  ) {}

  public async execute({ name, state }: IRequest): Promise<City> {
    const findCityByName = await this.citiesRepository.findByName(name);

    if (findCityByName) {
      throw new AppError('This city is already created');
    }

    const city = this.citiesRepository.create({
      name,
      state,
    });

    return city;
  }
}

export default CreateCityService;
