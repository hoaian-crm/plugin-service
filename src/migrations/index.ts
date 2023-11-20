import { config } from 'dotenv';
import { Plugin } from 'src/modules/plugin/plugin.entity';
import { DataSource } from 'typeorm';
import { CreatePluginTable1700473822354 } from './1700473822354-CreatePluginTable';

config();

export default new DataSource({
  type: 'postgres',
  host: process.env.PG_HOST,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: +process.env.PG_PORT,
  entities: [Plugin],
  migrations: [CreatePluginTable1700473822354],
});
