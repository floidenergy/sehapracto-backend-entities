import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("doctor_online_appointments")
export class DoctorOnlineAppointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    doctor_id: number;

    @Column()
    user_id: number;

    @Column()
    start: string;

    @Column()
    date: string;

    @Column({ type: "timestamp", nullable: true })
    date_time_stamp: Date;

    @Column({ default: false })
    is_rated: boolean;

    @Column({ default: 0 })
    rating: number;

    @Column({ default: 0 })
    status: number;

    @Column({ default: false })
    isDoctorJoin: boolean;

    @Column({ default: false })
    isUserJoin: boolean;

    @Column()
    duration: number;

    @Column({ type: "text", nullable: true })
    rating_comment: string;

    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;
}
