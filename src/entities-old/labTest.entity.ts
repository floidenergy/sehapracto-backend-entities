import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('lab_tests')
export class LabTest {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nameEn: string;

    @Column({ nullable: true })
    nameAr: string;

    @Column({ nullable: true })
    nameTr: string;

    @Column('text')
    descriptionEn: string;

    @Column('text', { nullable: true })
    descriptionAr: string;

    @Column('text', { nullable: true })
    descriptionTr: string;

    @Column('int', { nullable: true })
    priceTurkey: number;

    @Column('int', { nullable: true })
    priceQatar: number;

    @Column('int', { default: 0 })
    orderInList: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
