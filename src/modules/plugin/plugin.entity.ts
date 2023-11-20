import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Permission } from '../permission/permission.entity';

@Entity('plugins')
export class Plugin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  enable: boolean;

  @Column()
  deployment: string; // Url yaml file for deployment

  @Column()
  service: string; // Uri yaml file for service

  @Column()
  upstream: string;

  @ManyToMany(() => Permission)
  @JoinTable({
    name: 'plugin_permission',
  })
  permissions: Permission[];
}
