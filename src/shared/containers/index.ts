import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import ICitiesRepository from '@modules/cities/repositories/ICitiesRepository';
import CitiesRepository from '@modules/cities/infra/typeorm/repositories/CitiesRepository';

import IShipmentRoutesRepository from '@modules/shipmentRoutes/repositories/IShipmentRoutesRepository';
import ShipmentRoutesRepository from '@modules/shipmentRoutes/infra/typeorm/repositories/ShipmentRoutesRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ICitiesRepository>(
  'CitiesRepository',
  CitiesRepository,
);

container.registerSingleton<IShipmentRoutesRepository>(
  'ShipmentRoutesRepository',
  ShipmentRoutesRepository,
);
