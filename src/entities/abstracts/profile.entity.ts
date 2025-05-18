import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { genSalt, hash, compare } from "bcryptjs";
import { User } from "../user.entity";

const saltRound = 10;

export class Profile {
  @Column({ select: false })
  password?: string;

  @OneToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "userId" })
  user: User;

  @Column({
    default: true,
  })
  active: boolean;

  // Hash password before saving
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    if (!this.password) return;

    const salt = await genSalt(saltRound);
    this.password = await hash(this.password as string, salt);
  }

  // Validate password
  async validatePasswordOrFail(plainPassword: string): Promise<true> {
    const valid = await compare(plainPassword, this.password);
    if (!valid) throw Error("Unvalid Password");
    return true;
  }
}
