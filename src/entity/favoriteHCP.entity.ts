import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("favorite_hcps")
export class FavoriteHcp {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "int" })
    user_id: number;

    @Column({ type: "int" })
    h_c_p_id: number;

    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;
}
