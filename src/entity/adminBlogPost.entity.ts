import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm";

@Entity("admin_blog_posts")
export class AdminBlogPost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  countryId: number;

  @Column()
  blogCategoryId: number;

  @Column({ nullable: true })
  medicalSpecialtyId: number;

  @Column({ nullable: true })
  specialtyId: number;

  @Column({ default: "SehaPracto" })
  author: string;

  @Column({ nullable: true, unique: true })
  slug: string;

  @Column()
  img: string;

  @Column({ nullable: true })
  youtubeLink: string;

  @Column()
  title: string;

  @Column("text")
  content: string;

  @Column("text", { nullable: true })
  metadata: string;

  @Column("text", { nullable: true })
  keywords: string;

  @Column()
  language: string;

  @Column({ default: 0 })
  views: number;

  @Column({ default: false })
  isApproved: boolean;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
