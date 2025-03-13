import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('admin_blog_post_favorites')
export class AdminBlogPostFavorite {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    adminBlogPostId: number;

    @Column({ type: 'int' })
    userId: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
