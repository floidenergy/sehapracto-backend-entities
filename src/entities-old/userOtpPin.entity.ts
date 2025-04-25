import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("user_otp_pins")
export class UserOtpPin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "int" })
    user_id: number;

    @Column({ type: "varchar", length: 255 })
    pin: string;

    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;
}
