import express from 'express';
import 'reflect-metadata';
import { UserController } from './controller/user.controller';
import { DestinationController } from './controller/destination.controller';
import { ToursController } from './controller/tours.controller';
import loaders from './loaders';

async function startServer() {
    // Récupération de l'application initiale
    const app = express();

    // Chargement des différent loader
    await loaders(app);

    // Ajout des différentes route de votre application
    UserController(app);
    DestinationController(app);
    ToursController(app);

    // Démarrage du serveur une fois que tout est correctement init
    app.listen(3003, () => console.log('Express server  is running 3001'));
  }

startServer();
