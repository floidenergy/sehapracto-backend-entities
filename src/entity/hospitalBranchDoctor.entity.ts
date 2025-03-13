import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("hospital_branch_doctors")
export class HospitalBranchDoctor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "int" })
    hospital_branch_id: number;

    @Column({ type: "int" })
    hospital_doctor_id: number;

    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;
}
