import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('admin_blog_post_comments')
export class AdminBlogPostComment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    adminBlogPostId: number;

    @Column()
    userId: number;

    @Column('text')
    content: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
