import City from '../infra/typeorm/entities/City';
import ICreateCityDTO from '../dtos/ICreateCityDTO';

export default interface ICitiesRepository {
  create(data: ICreateCityDTO): Promise<City>;
  list(): Promise<City[] | undefined>;
  findByName(name: string): Promise<City | undefined>;
}
