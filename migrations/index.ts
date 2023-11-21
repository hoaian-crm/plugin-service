import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { CreatePluginTable1700473822354 } from './1700473822354-CreatePluginTable';
import { AddColumnConfigToPlugin1700531709988 } from './1700531709988-AddColumnConfigToPlugin';
import { AddTablePluginPermission1700535138704 } from './1700535138704-AddTablePluginPermission';

config();

export default new DataSource({
  type: 'postgres',
  host: process.env.PG_HOST,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: +process.env.PG_PORT,
  entities: [],
  migrations: [
    CreatePluginTable1700473822354,
    AddColumnConfigToPlugin1700531709988,
    AddTablePluginPermission1700535138704,
  ],
});
