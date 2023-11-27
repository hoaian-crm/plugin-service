import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { CreatePluginTable1700473822354 } from './1700473822354-CreatePluginTable';
import { AddColumnConfigToPlugin1700531709988 } from './1700531709988-AddColumnConfigToPlugin';
import { AddTablePluginPermission1700535138704 } from './1700535138704-AddTablePluginPermission';
import { CreatePermissionForPuginApi1700983556030 } from './1700983556030-CreatePermissionForPuginApi';
import { DropColumnInTablePlugin1701094105442 } from './1701094105442-DropColumnInTablePlugin';
import { AddUniqueForPlugin1701094534049 } from './1701094534049-AddUniqueForPlugin';
import { AddConfigFieldToTablePlugin1701095137232 } from './1701095137232-AddConfigFieldToTablePlugin';

config();

export default new DataSource({
  type: 'postgres',
  host: process.env.PG_HOST,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: +process.env.PG_PORT,
  migrations: [
    CreatePluginTable1700473822354,
    AddColumnConfigToPlugin1700531709988,
    AddTablePluginPermission1700535138704,
    CreatePermissionForPuginApi1700983556030,
    DropColumnInTablePlugin1701094105442,
    AddUniqueForPlugin1701094534049,
    AddConfigFieldToTablePlugin1701095137232
  ],
});
