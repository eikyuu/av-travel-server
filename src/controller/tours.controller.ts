import { commonController } from './../core/common_functions.controller';
import express, { Application, Router, Request, Response } from 'express';
import { ToursService } from '../services/tours.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const ToursController = (app: Application) => {

  const toursService = new ToursService();

  let toursRouter = Router();

  toursRouter = commonController(toursService, toursRouter);

  app.use('/tours', toursRouter);

};
