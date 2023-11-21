import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
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
  infrastructure: string; // Uri yaml file for service

  @Column()
  upstream: string;

  @Column('jsonb')
  config: object;

  @ManyToMany(() => Permission)
  @JoinTable({
    name: 'plugin_permission',
    joinColumn: { name: 'plugin_id' },
    inverseJoinColumn: { name: 'permission_id' },
  })
  permissions: Permission[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
