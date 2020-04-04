import { createConnection } from 'typeorm';
import { User } from '../entity/user.entity';

export default async () => {

    await createConnection(
    {
        type: 'mariadb',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'av-travel',
        entities: [
            'src/entity/**/*.ts',
        ],
        synchronize: true,
        migrations: [
            'src/migration/**/*.ts'
         ],
         subscribers: [
            'src/subscriber/**/*.ts'
         ],
         cli: {
            entitiesDir: 'src/entity',
            migrationsDir: 'src/migration',
            subscribersDir: 'src/subscriber',
         },
    });
};
