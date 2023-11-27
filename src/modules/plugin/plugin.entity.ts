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

  @ManyToMany(() => Permission)
  @JoinTable({
    name: 'plugin_permission',
    joinColumn: { name: 'plugin_id' },
    inverseJoinColumn: { name: 'permission_id' },
  })
  permissions: Permission[];

  @Column()
  image: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column('jsonb')
  config: object;
}
