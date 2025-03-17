import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("hospital_departments")
export class HospitalDepartment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    hospital_id: number;

    @Column()
    medical_specialty_id: number;

    @Column({ default: false })
    is_hidden: boolean;

    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;
}
