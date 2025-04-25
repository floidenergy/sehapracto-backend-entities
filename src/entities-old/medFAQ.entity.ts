import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('med_faqs')
export class MedFaq {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    medicalSpecialtyId: number;

    @Column({ type: 'varchar' })
    questionEn: string;

    @Column({ type: 'varchar' })
    questionAr: string;

    @Column({ type: 'text' })
    answerEn: string;

    @Column({ type: 'text' })
    answerAr: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
