import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('question_doctors')
export class QuestionDoctor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column({ nullable: true })
    doctorId: number;

    @Column({ default: 0 })
    medicalSpecialtyId: number;

    @Column('text')
    content: string;

    @Column({ default: false })
    isAppear: boolean;

    @Column({ default: 0 })
    status: number;

    @Column({ default: 0 })
    views: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
