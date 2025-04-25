import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('hcp_blog_post_comments')
export class HcpBlogPostComment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    hcpBlogPostId: number;

    @Column()
    userId: number;

    @Column('text')
    content: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
