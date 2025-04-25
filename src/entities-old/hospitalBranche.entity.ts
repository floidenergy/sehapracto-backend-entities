import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("hospital_branches")
export class HospitalBranch {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "int" })
    hospital_id: number;

    @Column({ type: "int", nullable: true })
    city_id: number;

    @Column({ type: "int", nullable: true })
    province_id: number;

    @Column({ type: "varchar", length: 255 })
    name: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    street_name: string;

    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;
}
