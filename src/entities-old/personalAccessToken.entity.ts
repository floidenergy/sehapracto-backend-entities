import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Index } from 'typeorm';

@Entity('personal_access_tokens')
export class PersonalAccessToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tokenable_type: string;

  @Column()
  tokenable_id: number;

  @Column()
  name: string;

  @Column({ length: 64, unique: true })
  token: string;

  @Column('text', { nullable: true })
  abilities: string;

  @Column({ nullable: true })
  last_used_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
