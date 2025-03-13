import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('ad_spaces')
export class AdSpace {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    countryId: number;

    @Column({ type: 'varchar', length: 255 })
    location: string;

    @Column({ type: 'varchar', length: 255 })
    type: string;

    @Column({ type: 'varchar', length: 255 })
    url: string;

    @Column({ type: 'text', nullable: true })
    action: string | null;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
