import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("slide_images")
export class SlideImage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    slide_id: number;

    @Column()
    img_path: string;

    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;
}
