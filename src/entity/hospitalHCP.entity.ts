import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("hospital_hcps")
export class HospitalHcp {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "int" })
    hcp_id: number;

    @Column({ type: "int" })
    hospital_id: number;

    @Column({ type: "int" })
    hospital_hcp_department_id: number;

    @Column({ type: "boolean", default: false })
    is_available: boolean;

    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;
}
