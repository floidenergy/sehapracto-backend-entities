import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("hospital_appointments")
export class HospitalAppointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    hospital_id: number;

    @Column()
    hospital_department_id: number;

    @Column({ nullable: true })
    hospital_doctor_id: number;

    @Column({ nullable: true })
    time: string;

    @Column({ nullable: true })
    date: string;

    @Column({ default: 0 })
    status: number;

    @Column({ default: false })
    is_rated: boolean;

    @Column({ default: 0 })
    rating: number;

    @Column({ type: "text", nullable: true })
    rating_comment: string;

    @Column({ default: 0 })
    price: number;

    @Column({ default: "Not specified" })
    booked_by: string;

    @Column({ type: "timestamp", nullable: true })
    date_time_stamp: Date;

    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;
}
