import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repository/user.repository';
import { AbstractService } from '../core/abstract.services';
import { User } from 'src/entity/user.entity';

/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */

export class UserService extends AbstractService {

  protected repository = getCustomRepository(UserRepository);

  async getByUserId(id: number) {
    return await this.repository.findOne(id);
  }
  async postUsers(formData: any) {
    return await this.repository.save(formData);
  }
}
