import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import City from '@modules/cities/infra/typeorm/entities/City';
import ICitiesRepository from '../repositories/ICitiesRepository';

interface IRequest {}

@injectable()
class CreateCityService {
  constructor(
    @inject('CitiesRepository')
    private citiesRepository: ICitiesRepository,
  ) {}

  public async execute({}: IRequest): Promise<City[]> {
    const findCities = await this.citiesRepository.list();

    if (!findCities) {
      throw new AppError('Error on list cities');
    }

    return findCities;
  }
}

export default CreateCityService;
