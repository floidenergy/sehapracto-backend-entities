import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("slide_services")
export class SlideService {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    slide_id: number;

    @Column()
    name: string;

    @Column()
    img_path: string;

    @Column({ default: 0 })
    price: number;

    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;
}
