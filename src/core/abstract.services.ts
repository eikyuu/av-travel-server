import { ObjectLiteral, Repository } from 'typeorm';

export abstract class AbstractService {
    // Un singleton est une class ayant une instance unique à travers toute l'app
    protected abstract repository: Repository<ObjectLiteral>;

    async getAll() {
        return await this.repository.find();
    }

    async getById(id: number) {
        const element = await this.repository.findOne(id);
        if (!element) {
            throw new Error('ELEMENT NOT FOUND');
        }
        return element;
    }

    async create(element: any) {
        element = this.repository.create(element);
        return await this.repository.save(element);
    }

    async update(idElement: any, element: ObjectLiteral) {
        return await this.repository.update(idElement, element);
    }

    async delete(id: any) {
        return  await this.repository.delete(id);
    }

}
