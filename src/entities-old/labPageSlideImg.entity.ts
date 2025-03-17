import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('lab_page_slide_imgs')
export class LabPageSlideImg {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    laboratoryPageId: number;

    @Column()
    imgPath: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
