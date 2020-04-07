import { getCustomRepository } from 'typeorm';
import { ToursRepository } from '../repository/tours.repository';
import { AbstractService } from '../core/abstract.services';
import { Tours } from 'src/entity/tours.entity';

/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */

export class ToursService extends AbstractService {

  protected repository = getCustomRepository(ToursRepository);

}
