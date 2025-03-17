import { Entity, Column, PrimaryColumn, CreateDateColumn } from 'typeorm';

@Entity('password_resets')
export class PasswordReset {
  @PrimaryColumn()
  email: string;

  @Column()
  token: string;

  @CreateDateColumn({ nullable: true })
  created_at: Date;
}
