import { commonController } from './../core/common_functions.controller';
import express, { Application, Router, Request, Response } from 'express';
import { DestinationService } from '../services/destination.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const DestinationController = (app: Application) => {

  const destinationService = new DestinationService();

  let destinationRouter = Router();

  destinationRouter.get('/', async (req: Request, res: Response) => {
    res.send(await destinationService.getAll());
  });

  destinationRouter.post('/tours', async (req: Request, res: Response) => {
    const toursId = parseInt(req.body.toursId, 10);
    const destinationId = parseInt(req.body.destinationId, 10);
    res.send(await destinationService.addToursToDestination(toursId, destinationId));
  });

  destinationRouter = commonController(destinationService, destinationRouter);

  app.use('/destinations', destinationRouter);

};
