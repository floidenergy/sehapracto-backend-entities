import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('hcp_blog_post_likes')
export class HcpBlogPostLike {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    hcpBlogPostId: number;

    @Column({ type: 'int' })
    userId: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
