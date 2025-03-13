import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm";

@Entity("jobs")
export class Job {
    @PrimaryGeneratedColumn("increment", { type: "bigint" })
    id: number;

    @Column()
    @Index()
    queue: string;

    @Column({ type: "longtext" })
    payload: string;

    @Column({ type: "tinyint", unsigned: true })
    attempts: number;

    @Column({ type: "int", unsigned: true, nullable: true })
    reserved_at: number | null;

    @Column({ type: "int", unsigned: true })
    available_at: number;

    @Column({ type: "int", unsigned: true })
    created_at: number;
}
