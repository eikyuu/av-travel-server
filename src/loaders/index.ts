import { Application } from 'express';
import expressLoader from './express';
import typeOrmLoader from './typeorm';

export default async (app: Application) => {
  console.log('Express start init');
  await expressLoader(app);
  console.log('Express Intialized correctly');

  //Typeorm Start
  console.log('Typeorm Start init');
  await typeOrmLoader();
  console.log('Typeorm Intialized correctly');
};
