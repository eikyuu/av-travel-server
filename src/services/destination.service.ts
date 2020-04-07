import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.services';
import { Destination } from 'src/entity/destination.entity';
import { DestinationRepository } from '../repository/destination.repository';

/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */

export class DestinationService extends AbstractService {

  protected repository = getCustomRepository(DestinationRepository);

}
