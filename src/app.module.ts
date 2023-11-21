import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionModule } from './modules/permission/permission.module';
import { PluginModule } from './modules/plugin/plugin.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_HOST,
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      port: +process.env.PG_PORT,
      autoLoadEntities: true,
      logging: true,
    }),

    // App Module
    PluginModule,
    PermissionModule,
  ],
})
export class AppModule {}
