import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('doctor_blog_post_likes')
export class DoctorBlogPostLike {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    doctorBlogPostId: number;

    @Column({ type: 'int' })
    userId: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
