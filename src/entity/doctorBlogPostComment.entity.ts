import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('doctor_blog_post_comments')
export class DoctorBlogPostComment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    doctorBlogPostId: number;

    @Column()
    userId: number;

    @Column('text')
    content: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
