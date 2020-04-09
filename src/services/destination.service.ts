import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.services';
import { Destination } from 'src/entity/destination.entity';
import { DestinationRepository } from '../repository/destination.repository';
import { ToursRepository } from '../repository/tours.repository';
import { Tours } from 'src/entity/tours.entity';

/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */

export class DestinationService extends AbstractService {

  protected repository = getCustomRepository(DestinationRepository);
  protected toursRepository = getCustomRepository(ToursRepository);

  getAll() {
    return this.repository.find({ relations: ['tours'] });
  }
}
