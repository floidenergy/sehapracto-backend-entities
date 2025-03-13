'use strict';

var tslib = require('tslib');
var typeorm = require('typeorm');

exports.Country = class Country {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.Country.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.Country.prototype, "name", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.Country.prototype, "name_ar", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.Country.prototype, "tel_code", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.Country.prototype, "customer_support", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.Country.prototype, "currency", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.Country.prototype, "currency_vs_dollar", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.Country.prototype, "timezone", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.Country.prototype, "flag_icon", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Country.prototype, "is_active", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Country.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Country.prototype, "updated_at", void 0);
exports.Country = tslib.__decorate([
    typeorm.Entity('countries')
], exports.Country);

exports.Department = class Department {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.Department.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.Department.prototype, "name", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Department.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Department.prototype, "updatedAt", void 0);
exports.Department = tslib.__decorate([
    typeorm.Entity('departments')
], exports.Department);

exports.Admin = class Admin {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.Admin.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Department, (department) => department.id, { onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.Department)
], exports.Admin.prototype, "department", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.Admin.prototype, "name", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.Admin.prototype, "email", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.Admin.prototype, "password", void 0);
tslib.__decorate([
    typeorm.Column({ default: "https://s3.us-east-2.amazonaws.com/sehapracto-images/user_profile_images/Pc7bLYpjW2c56Jnb8ovCq3ZrA3rO8vPEL0j4ZsXH.jpg" }),
    tslib.__metadata("design:type", String)
], exports.Admin.prototype, "profile_img", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.Admin.prototype, "phone", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Country, (country) => country.id, { onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.Country)
], exports.Admin.prototype, "country", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Admin.prototype, "is_active", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Admin.prototype, "can_read_slide", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Admin.prototype, "can_add_slide", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Admin.prototype, "can_view_country", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Admin.prototype, "can_add_countries", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Admin.prototype, "can_view_doctor", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Admin.prototype, "can_edit_doctor", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Admin.prototype, "can_view_hcp", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Admin.prototype, "can_edit_hcp", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Admin.prototype, "can_view_hospital", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Admin.prototype, "can_edit_hospital", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Admin.prototype, "can_view_patient", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Admin.prototype, "can_view_offer", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Admin.prototype, "can_edit_offer", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Admin.prototype, "can_view_notification", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Admin.prototype, "can_edit_translation", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Admin.prototype, "is_translator", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Admin.prototype, "can_view_blog", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Admin.prototype, "can_edit_blog", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Admin.prototype, "can_view_lab_page", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Admin.prototype, "can_view_lab_test", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Admin.prototype, "can_view_lab_request", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Admin.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Admin.prototype, "updated_at", void 0);
exports.Admin = tslib.__decorate([
    typeorm.Entity('admins')
], exports.Admin);

exports.AdminBlogPostComment = class AdminBlogPostComment {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.AdminBlogPostComment.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.AdminBlogPostComment.prototype, "adminBlogPostId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.AdminBlogPostComment.prototype, "userId", void 0);
tslib.__decorate([
    typeorm.Column('text'),
    tslib.__metadata("design:type", String)
], exports.AdminBlogPostComment.prototype, "content", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.AdminBlogPostComment.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.AdminBlogPostComment.prototype, "updatedAt", void 0);
exports.AdminBlogPostComment = tslib.__decorate([
    typeorm.Entity('admin_blog_post_comments')
], exports.AdminBlogPostComment);

exports.AdminBlogPostFavorite = class AdminBlogPostFavorite {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.AdminBlogPostFavorite.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.AdminBlogPostFavorite.prototype, "adminBlogPostId", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.AdminBlogPostFavorite.prototype, "userId", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.AdminBlogPostFavorite.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.AdminBlogPostFavorite.prototype, "updatedAt", void 0);
exports.AdminBlogPostFavorite = tslib.__decorate([
    typeorm.Entity('admin_blog_post_favorites')
], exports.AdminBlogPostFavorite);

exports.AdminBlogPostLike = class AdminBlogPostLike {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.AdminBlogPostLike.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.AdminBlogPostLike.prototype, "adminBlogPostId", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.AdminBlogPostLike.prototype, "userId", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.AdminBlogPostLike.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.AdminBlogPostLike.prototype, "updatedAt", void 0);
exports.AdminBlogPostLike = tslib.__decorate([
    typeorm.Entity('admin_blog_post_likes')
], exports.AdminBlogPostLike);

exports.AdminBlogPost = class AdminBlogPost {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.AdminBlogPost.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.AdminBlogPost.prototype, "countryId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.AdminBlogPost.prototype, "blogCategoryId", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.AdminBlogPost.prototype, "medicalSpecialtyId", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.AdminBlogPost.prototype, "specialtyId", void 0);
tslib.__decorate([
    typeorm.Column({ default: "SehaPracto" }),
    tslib.__metadata("design:type", String)
], exports.AdminBlogPost.prototype, "author", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true, unique: true }),
    tslib.__metadata("design:type", String)
], exports.AdminBlogPost.prototype, "slug", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.AdminBlogPost.prototype, "img", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.AdminBlogPost.prototype, "youtubeLink", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.AdminBlogPost.prototype, "title", void 0);
tslib.__decorate([
    typeorm.Column("text"),
    tslib.__metadata("design:type", String)
], exports.AdminBlogPost.prototype, "content", void 0);
tslib.__decorate([
    typeorm.Column("text", { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.AdminBlogPost.prototype, "metadata", void 0);
tslib.__decorate([
    typeorm.Column("text", { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.AdminBlogPost.prototype, "keywords", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.AdminBlogPost.prototype, "language", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.AdminBlogPost.prototype, "views", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.AdminBlogPost.prototype, "isApproved", void 0);
tslib.__decorate([
    typeorm.Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    tslib.__metadata("design:type", Date)
], exports.AdminBlogPost.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    tslib.__metadata("design:type", Date)
], exports.AdminBlogPost.prototype, "updatedAt", void 0);
exports.AdminBlogPost = tslib.__decorate([
    typeorm.Entity("admin_blog_posts")
], exports.AdminBlogPost);

exports.AdSpace = class AdSpace {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.AdSpace.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.AdSpace.prototype, "countryId", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', length: 255 }),
    tslib.__metadata("design:type", String)
], exports.AdSpace.prototype, "location", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', length: 255 }),
    tslib.__metadata("design:type", String)
], exports.AdSpace.prototype, "type", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', length: 255 }),
    tslib.__metadata("design:type", String)
], exports.AdSpace.prototype, "url", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.AdSpace.prototype, "action", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.AdSpace.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.AdSpace.prototype, "updatedAt", void 0);
exports.AdSpace = tslib.__decorate([
    typeorm.Entity('ad_spaces')
], exports.AdSpace);

exports.AnswerDoctor = class AnswerDoctor {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.AnswerDoctor.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.AnswerDoctor.prototype, "questionDoctorId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.AnswerDoctor.prototype, "doctorId", void 0);
tslib.__decorate([
    typeorm.Column("text"),
    tslib.__metadata("design:type", String)
], exports.AnswerDoctor.prototype, "content", void 0);
tslib.__decorate([
    typeorm.Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    tslib.__metadata("design:type", Date)
], exports.AnswerDoctor.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    tslib.__metadata("design:type", Date)
], exports.AnswerDoctor.prototype, "updatedAt", void 0);
exports.AnswerDoctor = tslib.__decorate([
    typeorm.Entity("answer_doctors")
], exports.AnswerDoctor);

exports.User = class User {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.User.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.User.prototype, "unique_id", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.User.prototype, "refferal_code", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.User.prototype, "refferar_code", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.User.prototype, "first_name", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.User.prototype, "last_name", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.User.prototype, "gender", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'date', nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.User.prototype, "birthdate", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.User.prototype, "email", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.User.prototype, "email_verified_at", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.User.prototype, "phone", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.User.prototype, "phone_verified_at", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.User.prototype, "balance", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.User.prototype, "password", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true, default: 'avatar.png' }),
    tslib.__metadata("design:type", String)
], exports.User.prototype, "profile_img", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.User.prototype, "blood_group", void 0);
tslib.__decorate([
    typeorm.Column('text', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.User.prototype, "medical_history", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.User.prototype, "is_diabetic", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.User.prototype, "is_hypertensive", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.User.prototype, "is_smoker", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.User.prototype, "is_alcoholic", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.User.prototype, "id_number", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.User.prototype, "height", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.User.prototype, "weight", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.User.prototype, "country_id", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.User.prototype, "city_id", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.User.prototype, "insurance_company_id", void 0);
tslib.__decorate([
    typeorm.Column('text', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.User.prototype, "address", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.User.prototype, "provider", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.User.prototype, "provider_id", void 0);
tslib.__decorate([
    typeorm.Column({ default: 'free' }),
    tslib.__metadata("design:type", String)
], exports.User.prototype, "membership_type", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.User.prototype, "membership_id", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.User.prototype, "membership_number", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.User.prototype, "membership_points", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.User.prototype, "membership_start_date", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.User.prototype, "membership_end_date", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.User.prototype, "offers_saved_amount", void 0);
tslib.__decorate([
    typeorm.Column({ default: true }),
    tslib.__metadata("design:type", Boolean)
], exports.User.prototype, "is_active", void 0);
tslib.__decorate([
    typeorm.Column({ default: true }),
    tslib.__metadata("design:type", Boolean)
], exports.User.prototype, "can_start_trial", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.User.prototype, "is_trial", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.User.prototype, "fcm_token", void 0);
tslib.__decorate([
    typeorm.Column({ default: false, nullable: true }),
    tslib.__metadata("design:type", Boolean)
], exports.User.prototype, "is_to_delete", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.User.prototype, "delete_date", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.User.prototype, "is_deleted", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.User.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.User.prototype, "updated_at", void 0);
exports.User = tslib.__decorate([
    typeorm.Entity('users')
], exports.User);

exports.City = class City {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.City.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Country, (country) => country.id, { onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.Country)
], exports.City.prototype, "country", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.City.prototype, "name", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.City.prototype, "name_ar", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.City.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.City.prototype, "updated_at", void 0);
exports.City = tslib.__decorate([
    typeorm.Entity('cities')
], exports.City);

exports.Doctor = class Doctor {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.Doctor.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "unique_id", void 0);
tslib.__decorate([
    typeorm.Column({ default: "Dr." }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "title", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "first_name", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "first_name_ar", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "first_name_en", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "first_name_tr", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "last_name", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "last_name_ar", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "last_name_en", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "last_name_tr", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "gender", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'date', nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.Doctor.prototype, "birthdate", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "email", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.Doctor.prototype, "email_verified_at", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "phone", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.Doctor.prototype, "phone_verified_at", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "examination_fee", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "home_examination_fee", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "online_examination_fee", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "license_no", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "waiting_time", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.Doctor.prototype, "balance", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "password", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true, default: 'https://sehapracto-images.s3.us-east-2.amazonaws.com/newavatar.png' }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "profile_img", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "address", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "address_ar", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "address_en", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "address_tr", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'double precision', nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.Doctor.prototype, "longitude", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'double precision', nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.Doctor.prototype, "latitude", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "meta_title", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "meta_desc", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "bio", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "bio_ar", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "bio_en", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "bio_tr", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "pt_instruction", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.Doctor.prototype, "medicalSpecialty_id", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.Doctor.prototype, "medical_subspecialty_id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Country, (country) => country.id, { onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.Country)
], exports.Doctor.prototype, "country", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.City, (city) => city.id, { nullable: true, onDelete: 'SET NULL' }),
    tslib.__metadata("design:type", exports.City)
], exports.Doctor.prototype, "city", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "provider", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "provider_id", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.Doctor.prototype, "rating", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.Doctor.prototype, "number_ratings", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Doctor.prototype, "is_active", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Doctor.prototype, "is_available", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Doctor.prototype, "is_available_online", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Doctor.prototype, "is_en", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Doctor.prototype, "is_ar", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Doctor.prototype, "fcm_token", void 0);
tslib.__decorate([
    typeorm.Column({ default: false, nullable: true }),
    tslib.__metadata("design:type", Boolean)
], exports.Doctor.prototype, "is_to_delete", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.Doctor.prototype, "delete_date", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Doctor.prototype, "is_deleted", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Doctor.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Doctor.prototype, "updated_at", void 0);
exports.Doctor = tslib.__decorate([
    typeorm.Entity('doctors')
], exports.Doctor);

exports.Appointment = class Appointment {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.Appointment.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.User, (user) => user.id, { onDelete: "CASCADE" }),
    tslib.__metadata("design:type", exports.User)
], exports.Appointment.prototype, "user", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Doctor, (doctor) => doctor.id, {
        onDelete: "CASCADE",
    }),
    tslib.__metadata("design:type", exports.Doctor)
], exports.Appointment.prototype, "doctor", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar" }),
    tslib.__metadata("design:type", String)
], exports.Appointment.prototype, "start", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar" }),
    tslib.__metadata("design:type", String)
], exports.Appointment.prototype, "end", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar" }),
    tslib.__metadata("design:type", String)
], exports.Appointment.prototype, "type", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar" }),
    tslib.__metadata("design:type", String)
], exports.Appointment.prototype, "date", void 0);
tslib.__decorate([
    typeorm.Column({ type: "timestamp", nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.Appointment.prototype, "date_time_stamp", void 0);
tslib.__decorate([
    typeorm.Column({ type: "boolean", default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Appointment.prototype, "is_approved", void 0);
tslib.__decorate([
    typeorm.Column({ type: "boolean", default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Appointment.prototype, "is_finished", void 0);
tslib.__decorate([
    typeorm.Column({ type: "boolean", default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Appointment.prototype, "is_rejected", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int", default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.Appointment.prototype, "status", void 0);
tslib.__decorate([
    typeorm.Column({ type: "boolean", default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Appointment.prototype, "is_rated", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int", default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.Appointment.prototype, "rating", void 0);
tslib.__decorate([
    typeorm.Column({ type: "text", nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Appointment.prototype, "rating_comment", void 0);
tslib.__decorate([
    typeorm.Column({ type: "text", nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Appointment.prototype, "reason_to_reject", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Appointment.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Appointment.prototype, "updated_at", void 0);
exports.Appointment = tslib.__decorate([
    typeorm.Entity("appointments")
], exports.Appointment);

exports.BlogCategory = class BlogCategory {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.BlogCategory.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar", length: 255 }),
    tslib.__metadata("design:type", String)
], exports.BlogCategory.prototype, "name_ar", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar", length: 255 }),
    tslib.__metadata("design:type", String)
], exports.BlogCategory.prototype, "name_en", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar", length: 255 }),
    tslib.__metadata("design:type", String)
], exports.BlogCategory.prototype, "name_tr", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn({ type: "timestamp" }),
    tslib.__metadata("design:type", Date)
], exports.BlogCategory.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn({ type: "timestamp" }),
    tslib.__metadata("design:type", Date)
], exports.BlogCategory.prototype, "updated_at", void 0);
exports.BlogCategory = tslib.__decorate([
    typeorm.Entity("blog_categories")
], exports.BlogCategory);

exports.BlogPost = class BlogPost {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.BlogPost.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.BlogPost.prototype, "countryId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.BlogPost.prototype, "blogCategoryId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.BlogPost.prototype, "author", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true, unique: true }),
    tslib.__metadata("design:type", String)
], exports.BlogPost.prototype, "slug", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.BlogPost.prototype, "img", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.BlogPost.prototype, "youtubeLink", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.BlogPost.prototype, "title", void 0);
tslib.__decorate([
    typeorm.Column("text"),
    tslib.__metadata("design:type", String)
], exports.BlogPost.prototype, "content", void 0);
tslib.__decorate([
    typeorm.Column("text", { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.BlogPost.prototype, "metadata", void 0);
tslib.__decorate([
    typeorm.Column("text", { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.BlogPost.prototype, "keywords", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.BlogPost.prototype, "language", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.BlogPost.prototype, "views", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.BlogPost.prototype, "isApproved", void 0);
tslib.__decorate([
    typeorm.Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    tslib.__metadata("design:type", Date)
], exports.BlogPost.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    tslib.__metadata("design:type", Date)
], exports.BlogPost.prototype, "updatedAt", void 0);
exports.BlogPost = tslib.__decorate([
    typeorm.Entity("blog_posts")
], exports.BlogPost);

exports.BookedOffer = class BookedOffer {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.BookedOffer.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column('int'),
    tslib.__metadata("design:type", Number)
], exports.BookedOffer.prototype, "offerId", void 0);
tslib.__decorate([
    typeorm.Column('int'),
    tslib.__metadata("design:type", Number)
], exports.BookedOffer.prototype, "userId", void 0);
tslib.__decorate([
    typeorm.Column('int'),
    tslib.__metadata("design:type", Number)
], exports.BookedOffer.prototype, "price", void 0);
tslib.__decorate([
    typeorm.Column('varchar'),
    tslib.__metadata("design:type", String)
], exports.BookedOffer.prototype, "currency", void 0);
tslib.__decorate([
    typeorm.Column('varchar'),
    tslib.__metadata("design:type", String)
], exports.BookedOffer.prototype, "paymentType", void 0);
tslib.__decorate([
    typeorm.Column('boolean'),
    tslib.__metadata("design:type", Boolean)
], exports.BookedOffer.prototype, "isPaid", void 0);
tslib.__decorate([
    typeorm.Column('int', { default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.BookedOffer.prototype, "status", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.BookedOffer.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.BookedOffer.prototype, "updatedAt", void 0);
exports.BookedOffer = tslib.__decorate([
    typeorm.Entity('booked_offers')
], exports.BookedOffer);

exports.MedicineCategory = class MedicineCategory {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.MedicineCategory.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar", length: 255, unique: true }),
    tslib.__metadata("design:type", String)
], exports.MedicineCategory.prototype, "nameAr", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar", length: 255, unique: true }),
    tslib.__metadata("design:type", String)
], exports.MedicineCategory.prototype, "nameEn", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar", length: 255, unique: true }),
    tslib.__metadata("design:type", String)
], exports.MedicineCategory.prototype, "nameTr", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar", length: 255 }),
    tslib.__metadata("design:type", String)
], exports.MedicineCategory.prototype, "img", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.MedicineCategory.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.MedicineCategory.prototype, "updatedAt", void 0);
exports.MedicineCategory = tslib.__decorate([
    typeorm.Entity("medicine_categories")
], exports.MedicineCategory);

exports.MedicineSubcategory = class MedicineSubcategory {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.MedicineSubcategory.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.MedicineCategory, (category) => category.id, { onDelete: 'CASCADE' }),
    typeorm.JoinColumn({ name: 'medicine_category_id' }),
    tslib.__metadata("design:type", exports.MedicineCategory)
], exports.MedicineSubcategory.prototype, "medicineCategory", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', length: 255, unique: true }),
    tslib.__metadata("design:type", String)
], exports.MedicineSubcategory.prototype, "nameEn", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', length: 255, unique: true }),
    tslib.__metadata("design:type", String)
], exports.MedicineSubcategory.prototype, "nameAr", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', length: 255, unique: true }),
    tslib.__metadata("design:type", String)
], exports.MedicineSubcategory.prototype, "nameTr", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', length: 255 }),
    tslib.__metadata("design:type", String)
], exports.MedicineSubcategory.prototype, "img", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.MedicineSubcategory.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.MedicineSubcategory.prototype, "updatedAt", void 0);
exports.MedicineSubcategory = tslib.__decorate([
    typeorm.Entity('medicine_subcategories')
], exports.MedicineSubcategory);

exports.Medicine = class Medicine {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.Medicine.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Country, { nullable: false, onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.Country)
], exports.Medicine.prototype, "country", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.MedicineSubcategory, { nullable: false, onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.MedicineSubcategory)
], exports.Medicine.prototype, "medicineSubcategory", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.Medicine.prototype, "nameEn", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.Medicine.prototype, "nameAr", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.Medicine.prototype, "nameTr", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.Medicine.prototype, "scientificName", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.Medicine.prototype, "routeAdmin", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.Medicine.prototype, "img", void 0);
tslib.__decorate([
    typeorm.Column('text'),
    tslib.__metadata("design:type", String)
], exports.Medicine.prototype, "descriptionEn", void 0);
tslib.__decorate([
    typeorm.Column('text'),
    tslib.__metadata("design:type", String)
], exports.Medicine.prototype, "descriptionAr", void 0);
tslib.__decorate([
    typeorm.Column('text'),
    tslib.__metadata("design:type", String)
], exports.Medicine.prototype, "descriptionTr", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int', default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.Medicine.prototype, "price", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'boolean', default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Medicine.prototype, "isOtc", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'boolean', default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Medicine.prototype, "isAvailable", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Medicine.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Medicine.prototype, "updatedAt", void 0);
exports.Medicine = tslib.__decorate([
    typeorm.Entity('medicines')
], exports.Medicine);

exports.CartMedicine = class CartMedicine {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.CartMedicine.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.User, { nullable: false, onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.User)
], exports.CartMedicine.prototype, "user", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Medicine, { nullable: false, onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.Medicine)
], exports.CartMedicine.prototype, "medicine", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int', default: 1 }),
    tslib.__metadata("design:type", Number)
], exports.CartMedicine.prototype, "count", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.CartMedicine.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.CartMedicine.prototype, "updatedAt", void 0);
exports.CartMedicine = tslib.__decorate([
    typeorm.Entity('cart_medicines')
], exports.CartMedicine);

exports.Company = class Company {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.Company.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.Company.prototype, "countryId", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', length: 255, unique: true }),
    tslib.__metadata("design:type", String)
], exports.Company.prototype, "name", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Company.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Company.prototype, "updatedAt", void 0);
exports.Company = tslib.__decorate([
    typeorm.Entity('companies')
], exports.Company);

exports.CompanyEmployee = class CompanyEmployee {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.CompanyEmployee.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.CompanyEmployee.prototype, "userId", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.CompanyEmployee.prototype, "companyId", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.CompanyEmployee.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.CompanyEmployee.prototype, "updatedAt", void 0);
exports.CompanyEmployee = tslib.__decorate([
    typeorm.Entity('company_employees')
], exports.CompanyEmployee);

exports.HCP = class HCP {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.HCP.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "unique_id", void 0);
tslib.__decorate([
    typeorm.Column({ default: " " }),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "title", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "first_name", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "first_name_ar", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "first_name_en", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "first_name_tr", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "last_name", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "last_name_ar", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "last_name_en", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "last_name_tr", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "gender", void 0);
tslib.__decorate([
    typeorm.Column({ type: "date", nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.HCP.prototype, "birthdate", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "email", void 0);
tslib.__decorate([
    typeorm.Column({ type: "timestamp", nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.HCP.prototype, "email_verified_at", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "phone", void 0);
tslib.__decorate([
    typeorm.Column({ type: "timestamp", nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.HCP.prototype, "phone_verified_at", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "examination_fee", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "home_examination_fee", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "online_examination_fee", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "license_no", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "waiting_time", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.HCP.prototype, "balance", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "password", void 0);
tslib.__decorate([
    typeorm.Column({
        nullable: true,
        default: "https://sehapracto-images.s3.us-east-2.amazonaws.com/newavatar.png",
    }),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "profile_img", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "address", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "address_ar", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "address_en", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "address_tr", void 0);
tslib.__decorate([
    typeorm.Column({ type: "text", nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "bio", void 0);
tslib.__decorate([
    typeorm.Column({ type: "text", nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "bio_ar", void 0);
tslib.__decorate([
    typeorm.Column({ type: "text", nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "bio_en", void 0);
tslib.__decorate([
    typeorm.Column({ type: "text", nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "bio_tr", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.HCP.prototype, "specialty_id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Country, (country) => country.id, { onDelete: "CASCADE" }),
    tslib.__metadata("design:type", exports.Country)
], exports.HCP.prototype, "country", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.City, (city) => city.id, {
        nullable: true,
        onDelete: "SET NULL",
    }),
    tslib.__metadata("design:type", exports.City)
], exports.HCP.prototype, "city", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "provider", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HCP.prototype, "provider_id", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.HCP.prototype, "rating", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.HCP.prototype, "number_ratings", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.HCP.prototype, "is_active", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.HCP.prototype, "is_available", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.HCP.prototype, "is_en", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.HCP.prototype, "is_ar", void 0);
tslib.__decorate([
    typeorm.Column({ default: false, nullable: true }),
    tslib.__metadata("design:type", Boolean)
], exports.HCP.prototype, "is_to_delete", void 0);
tslib.__decorate([
    typeorm.Column({ type: "timestamp", nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.HCP.prototype, "delete_date", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.HCP.prototype, "is_deleted", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.HCP.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.HCP.prototype, "updated_at", void 0);
exports.HCP = tslib.__decorate([
    typeorm.Entity("h_c_p_s")
], exports.HCP);

exports.Degree = class Degree {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.Degree.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.HCP, (hcp) => hcp.id, {
        onDelete: "CASCADE",
    }),
    tslib.__metadata("design:type", exports.HCP)
], exports.Degree.prototype, "h_c_p", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar" }),
    tslib.__metadata("design:type", String)
], exports.Degree.prototype, "title", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar" }),
    tslib.__metadata("design:type", String)
], exports.Degree.prototype, "img", void 0);
tslib.__decorate([
    typeorm.Column({ type: "date" }),
    tslib.__metadata("design:type", String)
], exports.Degree.prototype, "degree_date", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Degree.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Degree.prototype, "updated_at", void 0);
exports.Degree = tslib.__decorate([
    typeorm.Entity("degrees")
], exports.Degree);

exports.DiscountType = class DiscountType {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.DiscountType.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', unique: true }),
    tslib.__metadata("design:type", String)
], exports.DiscountType.prototype, "name", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', unique: true }),
    tslib.__metadata("design:type", String)
], exports.DiscountType.prototype, "nameEn", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', unique: true }),
    tslib.__metadata("design:type", String)
], exports.DiscountType.prototype, "nameAr", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', unique: true }),
    tslib.__metadata("design:type", String)
], exports.DiscountType.prototype, "nameTr", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar' }),
    tslib.__metadata("design:type", String)
], exports.DiscountType.prototype, "color", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar' }),
    tslib.__metadata("design:type", String)
], exports.DiscountType.prototype, "img", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.DiscountType.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.DiscountType.prototype, "updatedAt", void 0);
exports.DiscountType = tslib.__decorate([
    typeorm.Entity('discount_types')
], exports.DiscountType);

exports.DoctorBlogPostComment = class DoctorBlogPostComment {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.DoctorBlogPostComment.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.DoctorBlogPostComment.prototype, "doctorBlogPostId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.DoctorBlogPostComment.prototype, "userId", void 0);
tslib.__decorate([
    typeorm.Column('text'),
    tslib.__metadata("design:type", String)
], exports.DoctorBlogPostComment.prototype, "content", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.DoctorBlogPostComment.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.DoctorBlogPostComment.prototype, "updatedAt", void 0);
exports.DoctorBlogPostComment = tslib.__decorate([
    typeorm.Entity('doctor_blog_post_comments')
], exports.DoctorBlogPostComment);

exports.DoctorBlogPostFavorite = class DoctorBlogPostFavorite {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.DoctorBlogPostFavorite.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.DoctorBlogPostFavorite.prototype, "doctorBlogPostId", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.DoctorBlogPostFavorite.prototype, "userId", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.DoctorBlogPostFavorite.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.DoctorBlogPostFavorite.prototype, "updatedAt", void 0);
exports.DoctorBlogPostFavorite = tslib.__decorate([
    typeorm.Entity('doctor_blog_post_favorites')
], exports.DoctorBlogPostFavorite);

exports.DoctorBlogPostLike = class DoctorBlogPostLike {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.DoctorBlogPostLike.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.DoctorBlogPostLike.prototype, "doctorBlogPostId", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.DoctorBlogPostLike.prototype, "userId", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.DoctorBlogPostLike.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.DoctorBlogPostLike.prototype, "updatedAt", void 0);
exports.DoctorBlogPostLike = tslib.__decorate([
    typeorm.Entity('doctor_blog_post_likes')
], exports.DoctorBlogPostLike);

exports.DoctorBlogPost = class DoctorBlogPost {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.DoctorBlogPost.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.DoctorBlogPost.prototype, "countryId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.DoctorBlogPost.prototype, "blogCategoryId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.DoctorBlogPost.prototype, "medicalSpecialtyId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.DoctorBlogPost.prototype, "doctorId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.DoctorBlogPost.prototype, "author", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true, unique: true }),
    tslib.__metadata("design:type", String)
], exports.DoctorBlogPost.prototype, "slug", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.DoctorBlogPost.prototype, "img", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.DoctorBlogPost.prototype, "youtubeLink", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.DoctorBlogPost.prototype, "title", void 0);
tslib.__decorate([
    typeorm.Column('text'),
    tslib.__metadata("design:type", String)
], exports.DoctorBlogPost.prototype, "content", void 0);
tslib.__decorate([
    typeorm.Column('text', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.DoctorBlogPost.prototype, "metadata", void 0);
tslib.__decorate([
    typeorm.Column('text', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.DoctorBlogPost.prototype, "keywords", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.DoctorBlogPost.prototype, "language", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.DoctorBlogPost.prototype, "views", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.DoctorBlogPost.prototype, "isApproved", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.DoctorBlogPost.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.DoctorBlogPost.prototype, "updatedAt", void 0);
exports.DoctorBlogPost = tslib.__decorate([
    typeorm.Entity('doctor_blog_posts')
], exports.DoctorBlogPost);

exports.MedicalSpecialty = class MedicalSpecialty {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.MedicalSpecialty.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.MedicalSpecialty.prototype, "name", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.MedicalSpecialty.prototype, "name_ar", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.MedicalSpecialty.prototype, "name_tr", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.MedicalSpecialty.prototype, "img", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.MedicalSpecialty.prototype, "description", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.MedicalSpecialty.prototype, "meta_desc_en", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.MedicalSpecialty.prototype, "meta_desc_ar", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.MedicalSpecialty.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.MedicalSpecialty.prototype, "updated_at", void 0);
exports.MedicalSpecialty = tslib.__decorate([
    typeorm.Entity('medical_specialties')
], exports.MedicalSpecialty);

exports.DoctorDepartmentService = class DoctorDepartmentService {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.DoctorDepartmentService.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.MedicalSpecialty, { nullable: false, onDelete: "CASCADE" }),
    tslib.__metadata("design:type", exports.MedicalSpecialty)
], exports.DoctorDepartmentService.prototype, "medicalSpecialty", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.DoctorDepartmentService.prototype, "name", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.DoctorDepartmentService.prototype, "nameAr", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.DoctorDepartmentService.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.DoctorDepartmentService.prototype, "updatedAt", void 0);
exports.DoctorDepartmentService = tslib.__decorate([
    typeorm.Entity("doctor_department_services")
], exports.DoctorDepartmentService);

exports.Language = class Language {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.Language.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ length: 255 }),
    tslib.__metadata("design:type", String)
], exports.Language.prototype, "name", void 0);
tslib.__decorate([
    typeorm.Column({ length: 10 }),
    tslib.__metadata("design:type", String)
], exports.Language.prototype, "abbrv", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Language.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Language.prototype, "updatedAt", void 0);
exports.Language = tslib.__decorate([
    typeorm.Entity("languages")
], exports.Language);

exports.DoctorLanguage = class DoctorLanguage {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.DoctorLanguage.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Language, (language) => language.id, { onDelete: "CASCADE" }),
    tslib.__metadata("design:type", exports.Language)
], exports.DoctorLanguage.prototype, "language", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Doctor, (doctor) => doctor.id, { onDelete: "CASCADE" }),
    tslib.__metadata("design:type", exports.Doctor)
], exports.DoctorLanguage.prototype, "doctor", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.DoctorLanguage.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.DoctorLanguage.prototype, "updatedAt", void 0);
exports.DoctorLanguage = tslib.__decorate([
    typeorm.Entity("doctor_languages")
], exports.DoctorLanguage);

exports.DoctorNotification = class DoctorNotification {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.DoctorNotification.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Doctor, { nullable: false, onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.Doctor)
], exports.DoctorNotification.prototype, "doctor", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.DoctorNotification.prototype, "title", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.DoctorNotification.prototype, "titleAr", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.DoctorNotification.prototype, "context", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.DoctorNotification.prototype, "contextAr", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.DoctorNotification.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.DoctorNotification.prototype, "updatedAt", void 0);
exports.DoctorNotification = tslib.__decorate([
    typeorm.Entity('doctor_notifications')
], exports.DoctorNotification);

exports.DoctorOnlineAppointment = class DoctorOnlineAppointment {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.DoctorOnlineAppointment.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.DoctorOnlineAppointment.prototype, "doctor_id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.DoctorOnlineAppointment.prototype, "user_id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.DoctorOnlineAppointment.prototype, "start", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.DoctorOnlineAppointment.prototype, "date", void 0);
tslib.__decorate([
    typeorm.Column({ type: "timestamp", nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.DoctorOnlineAppointment.prototype, "date_time_stamp", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.DoctorOnlineAppointment.prototype, "is_rated", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.DoctorOnlineAppointment.prototype, "rating", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.DoctorOnlineAppointment.prototype, "status", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.DoctorOnlineAppointment.prototype, "isDoctorJoin", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.DoctorOnlineAppointment.prototype, "isUserJoin", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.DoctorOnlineAppointment.prototype, "duration", void 0);
tslib.__decorate([
    typeorm.Column({ type: "text", nullable: true }),
    tslib.__metadata("design:type", String)
], exports.DoctorOnlineAppointment.prototype, "rating_comment", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn({ type: "timestamp" }),
    tslib.__metadata("design:type", Date)
], exports.DoctorOnlineAppointment.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn({ type: "timestamp" }),
    tslib.__metadata("design:type", Date)
], exports.DoctorOnlineAppointment.prototype, "updated_at", void 0);
exports.DoctorOnlineAppointment = tslib.__decorate([
    typeorm.Entity("doctor_online_appointments")
], exports.DoctorOnlineAppointment);

exports.DoctorPatientMessage = class DoctorPatientMessage {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.DoctorPatientMessage.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.DoctorPatientConversation, (conversation) => conversation.messages, { onDelete: "CASCADE" }),
    tslib.__metadata("design:type", Promise)
], exports.DoctorPatientMessage.prototype, "doctorPatientConversation", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.DoctorPatientMessage.prototype, "sender", void 0);
tslib.__decorate([
    typeorm.Column("text"),
    tslib.__metadata("design:type", String)
], exports.DoctorPatientMessage.prototype, "message", void 0);
tslib.__decorate([
    typeorm.Column({ default: "txt" }),
    tslib.__metadata("design:type", String)
], exports.DoctorPatientMessage.prototype, "msgType", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.DoctorPatientMessage.prototype, "fileLink", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.DoctorPatientMessage.prototype, "isSeen", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.DoctorPatientMessage.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.DoctorPatientMessage.prototype, "updatedAt", void 0);
exports.DoctorPatientMessage = tslib.__decorate([
    typeorm.Entity("doctor_patient_messages")
], exports.DoctorPatientMessage);

exports.DoctorPatientConversation = class DoctorPatientConversation {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.DoctorPatientConversation.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Doctor, (doctor) => doctor.id, { onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.Doctor)
], exports.DoctorPatientConversation.prototype, "doctor", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.User, (user) => user.id, { onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.User)
], exports.DoctorPatientConversation.prototype, "user", void 0);
tslib.__decorate([
    typeorm.OneToMany(() => exports.DoctorPatientMessage, (message) => message.doctorPatientConversation),
    tslib.__metadata("design:type", Array)
], exports.DoctorPatientConversation.prototype, "messages", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.DoctorPatientConversation.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.DoctorPatientConversation.prototype, "updatedAt", void 0);
exports.DoctorPatientConversation = tslib.__decorate([
    typeorm.Entity('doctor_patient_conversations')
], exports.DoctorPatientConversation);

exports.DoctorRating = class DoctorRating {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.DoctorRating.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.DoctorRating.prototype, "rating", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.DoctorRating.prototype, "userId", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.User),
    typeorm.JoinColumn({ name: 'user_id' }),
    tslib.__metadata("design:type", exports.User)
], exports.DoctorRating.prototype, "user", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.DoctorRating.prototype, "doctorId", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Doctor),
    typeorm.JoinColumn({ name: 'doctor_id' }),
    tslib.__metadata("design:type", exports.Doctor)
], exports.DoctorRating.prototype, "doctor", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text' }),
    tslib.__metadata("design:type", String)
], exports.DoctorRating.prototype, "comment", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.DoctorRating.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.DoctorRating.prototype, "updatedAt", void 0);
exports.DoctorRating = tslib.__decorate([
    typeorm.Entity('doctor_ratings')
], exports.DoctorRating);

exports.DoctorService = class DoctorService {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.DoctorService.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Doctor, { nullable: false, onDelete: "CASCADE" }),
    tslib.__metadata("design:type", exports.Doctor)
], exports.DoctorService.prototype, "doctor", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.DoctorDepartmentService, {
        nullable: false,
        onDelete: "CASCADE",
    }),
    tslib.__metadata("design:type", exports.DoctorDepartmentService)
], exports.DoctorService.prototype, "doctorDepartmentService", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.DoctorService.prototype, "fee", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.DoctorService.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.DoctorService.prototype, "updatedAt", void 0);
exports.DoctorService = tslib.__decorate([
    typeorm.Entity("doctor_services")
], exports.DoctorService);

exports.DoctorTransactionRecord = class DoctorTransactionRecord {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.DoctorTransactionRecord.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Doctor, { nullable: false, onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.Doctor)
], exports.DoctorTransactionRecord.prototype, "doctor", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Admin, { nullable: false, onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.Admin)
], exports.DoctorTransactionRecord.prototype, "admin", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.DoctorTransactionRecord.prototype, "type", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.DoctorTransactionRecord.prototype, "amount", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.DoctorTransactionRecord.prototype, "balanceBefore", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.DoctorTransactionRecord.prototype, "balanceAfter", void 0);
tslib.__decorate([
    typeorm.Column('text'),
    tslib.__metadata("design:type", String)
], exports.DoctorTransactionRecord.prototype, "explanation", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.DoctorTransactionRecord.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.DoctorTransactionRecord.prototype, "updatedAt", void 0);
exports.DoctorTransactionRecord = tslib.__decorate([
    typeorm.Entity('doctor_transaction_records')
], exports.DoctorTransactionRecord);

exports.Hospital = class Hospital {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.Hospital.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.Hospital.prototype, "country_id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.Hospital.prototype, "city_id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.Hospital.prototype, "province_id", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.Hospital.prototype, "special_code", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.Hospital.prototype, "name", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Hospital.prototype, "name_ar", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Hospital.prototype, "name_en", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Hospital.prototype, "name_tr", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.Hospital.prototype, "logo", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.Hospital.prototype, "adress", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Hospital.prototype, "adress_ar", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Hospital.prototype, "adress_en", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Hospital.prototype, "adress_tr", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.Hospital.prototype, "phone", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true, nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Hospital.prototype, "phone2", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true, type: 'timestamp' }),
    tslib.__metadata("design:type", Date)
], exports.Hospital.prototype, "phone_verified_at", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.Hospital.prototype, "email", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Hospital.prototype, "facebook_link", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Hospital.prototype, "instagram_link", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Hospital.prototype, "twitter_link", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Hospital.prototype, "linkedin_link", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Hospital.prototype, "youtube_link", void 0);
tslib.__decorate([
    typeorm.Column('text'),
    tslib.__metadata("design:type", String)
], exports.Hospital.prototype, "bio", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Hospital.prototype, "bio_ar", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Hospital.prototype, "bio_en", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Hospital.prototype, "bio_tr", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.Hospital.prototype, "balance", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.Hospital.prototype, "rating", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.Hospital.prototype, "number_ratings", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.Hospital.prototype, "start_time", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.Hospital.prototype, "end_time", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.Hospital.prototype, "work_days", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Hospital.prototype, "longitude", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Hospital.prototype, "latitude", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.Hospital.prototype, "sp_percentage", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Hospital.prototype, "is_active", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Hospital.prototype, "is_available", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Hospital.prototype, "is_pin", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Hospital.prototype, "is_show_price", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Hospital.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Hospital.prototype, "updated_at", void 0);
exports.Hospital = tslib.__decorate([
    typeorm.Entity('hospitals')
], exports.Hospital);

exports.DoctorWorkLocation = class DoctorWorkLocation {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.DoctorWorkLocation.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Doctor, { nullable: false, onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.Doctor)
], exports.DoctorWorkLocation.prototype, "doctor", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Hospital, { nullable: true, onDelete: 'SET NULL' }),
    tslib.__metadata("design:type", exports.Hospital)
], exports.DoctorWorkLocation.prototype, "hospital", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.DoctorWorkLocation.prototype, "name", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.DoctorWorkLocation.prototype, "nameAr", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.DoctorWorkLocation.prototype, "nameEn", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.DoctorWorkLocation.prototype, "nameTr", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.DoctorWorkLocation.prototype, "phone", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.DoctorWorkLocation.prototype, "address", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.DoctorWorkLocation.prototype, "addressAr", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.DoctorWorkLocation.prototype, "addressEn", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.DoctorWorkLocation.prototype, "addressTr", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.DoctorWorkLocation.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.DoctorWorkLocation.prototype, "updatedAt", void 0);
exports.DoctorWorkLocation = tslib.__decorate([
    typeorm.Entity('doctor_work_locations')
], exports.DoctorWorkLocation);

exports.EmailVerification = class EmailVerification {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.EmailVerification.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.EmailVerification.prototype, "userId", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.User),
    typeorm.JoinColumn({ name: 'user_id' }),
    tslib.__metadata("design:type", exports.User)
], exports.EmailVerification.prototype, "user", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', length: 255 }),
    tslib.__metadata("design:type", String)
], exports.EmailVerification.prototype, "userType", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', length: 255, unique: true }),
    tslib.__metadata("design:type", String)
], exports.EmailVerification.prototype, "code", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.EmailVerification.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.EmailVerification.prototype, "updatedAt", void 0);
exports.EmailVerification = tslib.__decorate([
    typeorm.Entity('email_verifications')
], exports.EmailVerification);

exports.FailedJob = class FailedJob {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.FailedJob.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.FailedJob.prototype, "uuid", void 0);
tslib.__decorate([
    typeorm.Column('text'),
    tslib.__metadata("design:type", String)
], exports.FailedJob.prototype, "connection", void 0);
tslib.__decorate([
    typeorm.Column('text'),
    tslib.__metadata("design:type", String)
], exports.FailedJob.prototype, "queue", void 0);
tslib.__decorate([
    typeorm.Column('longtext'),
    tslib.__metadata("design:type", String)
], exports.FailedJob.prototype, "payload", void 0);
tslib.__decorate([
    typeorm.Column('longtext'),
    tslib.__metadata("design:type", String)
], exports.FailedJob.prototype, "exception", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.FailedJob.prototype, "failed_at", void 0);
exports.FailedJob = tslib.__decorate([
    typeorm.Entity('failed_jobs')
], exports.FailedJob);

exports.FavoriteDoctor = class FavoriteDoctor {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.FavoriteDoctor.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.User, (user) => user.id, { onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.User)
], exports.FavoriteDoctor.prototype, "user", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Doctor, (doctor) => doctor.id, { onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.Doctor)
], exports.FavoriteDoctor.prototype, "doctor", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.FavoriteDoctor.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.FavoriteDoctor.prototype, "updated_at", void 0);
exports.FavoriteDoctor = tslib.__decorate([
    typeorm.Entity('favorite_doctors')
], exports.FavoriteDoctor);

exports.FavoriteHcp = class FavoriteHcp {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.FavoriteHcp.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int" }),
    tslib.__metadata("design:type", Number)
], exports.FavoriteHcp.prototype, "user_id", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int" }),
    tslib.__metadata("design:type", Number)
], exports.FavoriteHcp.prototype, "h_c_p_id", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn({ type: "timestamp" }),
    tslib.__metadata("design:type", Date)
], exports.FavoriteHcp.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn({ type: "timestamp" }),
    tslib.__metadata("design:type", Date)
], exports.FavoriteHcp.prototype, "updated_at", void 0);
exports.FavoriteHcp = tslib.__decorate([
    typeorm.Entity("favorite_hcps")
], exports.FavoriteHcp);

exports.HcpAppointment = class HcpAppointment {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.HcpAppointment.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.User, (user) => user.id, { onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.User)
], exports.HcpAppointment.prototype, "user", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.HCP, (hcp) => hcp.id, { onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.HCP)
], exports.HcpAppointment.prototype, "h_c_p", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar' }),
    tslib.__metadata("design:type", String)
], exports.HcpAppointment.prototype, "start", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar' }),
    tslib.__metadata("design:type", String)
], exports.HcpAppointment.prototype, "end", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar' }),
    tslib.__metadata("design:type", String)
], exports.HcpAppointment.prototype, "type", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar' }),
    tslib.__metadata("design:type", String)
], exports.HcpAppointment.prototype, "date", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.HcpAppointment.prototype, "date_time_stamp", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'boolean', default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.HcpAppointment.prototype, "is_approved", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'boolean', default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.HcpAppointment.prototype, "is_finished", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'boolean', default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.HcpAppointment.prototype, "is_rejected", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int', default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.HcpAppointment.prototype, "status", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'boolean', default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.HcpAppointment.prototype, "is_rated", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int', default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.HcpAppointment.prototype, "rating", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HcpAppointment.prototype, "rating_comment", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HcpAppointment.prototype, "reason_to_reject", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.HcpAppointment.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.HcpAppointment.prototype, "updated_at", void 0);
exports.HcpAppointment = tslib.__decorate([
    typeorm.Entity('hcp_appointments')
], exports.HcpAppointment);

exports.HcpBlogPost = class HcpBlogPost {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.HcpBlogPost.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.HcpBlogPost.prototype, "countryId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.HcpBlogPost.prototype, "blogCategoryId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.HcpBlogPost.prototype, "specialtyId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.HcpBlogPost.prototype, "hcpId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.HcpBlogPost.prototype, "author", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true, unique: true }),
    tslib.__metadata("design:type", String)
], exports.HcpBlogPost.prototype, "slug", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.HcpBlogPost.prototype, "img", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HcpBlogPost.prototype, "youtubeLink", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.HcpBlogPost.prototype, "title", void 0);
tslib.__decorate([
    typeorm.Column('text'),
    tslib.__metadata("design:type", String)
], exports.HcpBlogPost.prototype, "content", void 0);
tslib.__decorate([
    typeorm.Column('text', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HcpBlogPost.prototype, "metadata", void 0);
tslib.__decorate([
    typeorm.Column('text', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HcpBlogPost.prototype, "keywords", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.HcpBlogPost.prototype, "language", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.HcpBlogPost.prototype, "views", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.HcpBlogPost.prototype, "isApproved", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.HcpBlogPost.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.HcpBlogPost.prototype, "updatedAt", void 0);
exports.HcpBlogPost = tslib.__decorate([
    typeorm.Entity('hcp_blog_posts')
], exports.HcpBlogPost);

exports.HcpBlogPostComment = class HcpBlogPostComment {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.HcpBlogPostComment.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.HcpBlogPostComment.prototype, "hcpBlogPostId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.HcpBlogPostComment.prototype, "userId", void 0);
tslib.__decorate([
    typeorm.Column('text'),
    tslib.__metadata("design:type", String)
], exports.HcpBlogPostComment.prototype, "content", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.HcpBlogPostComment.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.HcpBlogPostComment.prototype, "updatedAt", void 0);
exports.HcpBlogPostComment = tslib.__decorate([
    typeorm.Entity('hcp_blog_post_comments')
], exports.HcpBlogPostComment);

exports.HcpBlogPostFavorite = class HcpBlogPostFavorite {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.HcpBlogPostFavorite.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.HcpBlogPostFavorite.prototype, "hcpBlogPostId", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.HcpBlogPostFavorite.prototype, "userId", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.HcpBlogPostFavorite.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.HcpBlogPostFavorite.prototype, "updatedAt", void 0);
exports.HcpBlogPostFavorite = tslib.__decorate([
    typeorm.Entity('hcp_blog_post_favorites')
], exports.HcpBlogPostFavorite);

exports.HcpBlogPostLike = class HcpBlogPostLike {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.HcpBlogPostLike.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.HcpBlogPostLike.prototype, "hcpBlogPostId", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.HcpBlogPostLike.prototype, "userId", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.HcpBlogPostLike.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.HcpBlogPostLike.prototype, "updatedAt", void 0);
exports.HcpBlogPostLike = tslib.__decorate([
    typeorm.Entity('hcp_blog_post_likes')
], exports.HcpBlogPostLike);

exports.HCPLanguage = class HCPLanguage {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.HCPLanguage.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Language, (language) => language.id, { onDelete: "CASCADE" }),
    tslib.__metadata("design:type", exports.Language)
], exports.HCPLanguage.prototype, "language", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.HCP, (hcp) => hcp.id, { onDelete: "CASCADE" }),
    tslib.__metadata("design:type", exports.HCP)
], exports.HCPLanguage.prototype, "hcp", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.HCPLanguage.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.HCPLanguage.prototype, "updatedAt", void 0);
exports.HCPLanguage = tslib.__decorate([
    typeorm.Entity("hcp_languages")
], exports.HCPLanguage);

exports.HcpNotification = class HcpNotification {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.HcpNotification.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.HCP, { nullable: false, onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.HCP)
], exports.HcpNotification.prototype, "healthcareProvider", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.HcpNotification.prototype, "title", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.HcpNotification.prototype, "titleAr", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.HcpNotification.prototype, "context", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.HcpNotification.prototype, "contextAr", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.HcpNotification.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.HcpNotification.prototype, "updatedAt", void 0);
exports.HcpNotification = tslib.__decorate([
    typeorm.Entity('hcp_notifications')
], exports.HcpNotification);

exports.DoctorOtpPin = class DoctorOtpPin {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.DoctorOtpPin.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Doctor, (doctor) => doctor.id, { onDelete: "CASCADE" }),
    tslib.__metadata("design:type", exports.Doctor)
], exports.DoctorOtpPin.prototype, "doctor", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar", length: 10 }),
    tslib.__metadata("design:type", String)
], exports.DoctorOtpPin.prototype, "pin", void 0);
tslib.__decorate([
    typeorm.Column({ type: "timestamp" }),
    tslib.__metadata("design:type", Date)
], exports.DoctorOtpPin.prototype, "expiresAt", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.DoctorOtpPin.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.DoctorOtpPin.prototype, "updatedAt", void 0);
exports.DoctorOtpPin = tslib.__decorate([
    typeorm.Entity("doctor_otp_pins")
], exports.DoctorOtpPin);

exports.HcpRating = class HcpRating {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.HcpRating.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.HcpRating.prototype, "rating", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.HcpRating.prototype, "userId", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.User),
    typeorm.JoinColumn({ name: 'user_id' }),
    tslib.__metadata("design:type", exports.User)
], exports.HcpRating.prototype, "user", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.HcpRating.prototype, "hcpId", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.HCP),
    typeorm.JoinColumn({ name: 'h_c_p_id' }),
    tslib.__metadata("design:type", exports.HCP)
], exports.HcpRating.prototype, "hcp", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text' }),
    tslib.__metadata("design:type", String)
], exports.HcpRating.prototype, "comment", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.HcpRating.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.HcpRating.prototype, "updatedAt", void 0);
exports.HcpRating = tslib.__decorate([
    typeorm.Entity('hcp_ratings')
], exports.HcpRating);

exports.HcpTransactionRecord = class HcpTransactionRecord {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.HcpTransactionRecord.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.HCP, { nullable: false, onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.HCP)
], exports.HcpTransactionRecord.prototype, "healthcareProvider", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Admin, { nullable: false, onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.Admin)
], exports.HcpTransactionRecord.prototype, "admin", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.HcpTransactionRecord.prototype, "type", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.HcpTransactionRecord.prototype, "amount", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.HcpTransactionRecord.prototype, "balanceBefore", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.HcpTransactionRecord.prototype, "balanceAfter", void 0);
tslib.__decorate([
    typeorm.Column('text'),
    tslib.__metadata("design:type", String)
], exports.HcpTransactionRecord.prototype, "explanation", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.HcpTransactionRecord.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.HcpTransactionRecord.prototype, "updatedAt", void 0);
exports.HcpTransactionRecord = tslib.__decorate([
    typeorm.Entity('hcp_transaction_records')
], exports.HcpTransactionRecord);

exports.HcpWorkingHour = class HcpWorkingHour {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.HcpWorkingHour.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.HCP, (hcp) => hcp.id, { onDelete: "CASCADE" }),
    tslib.__metadata("design:type", exports.HCP)
], exports.HcpWorkingHour.prototype, "h_c_p", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar" }),
    tslib.__metadata("design:type", String)
], exports.HcpWorkingHour.prototype, "start", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar" }),
    tslib.__metadata("design:type", String)
], exports.HcpWorkingHour.prototype, "end", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar" }),
    tslib.__metadata("design:type", String)
], exports.HcpWorkingHour.prototype, "day_time", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.HcpWorkingHour.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.HcpWorkingHour.prototype, "updated_at", void 0);
exports.HcpWorkingHour = tslib.__decorate([
    typeorm.Entity("hcp_working_hours")
], exports.HcpWorkingHour);

exports.HcpWorkLocation = class HcpWorkLocation {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.HcpWorkLocation.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.HcpWorkLocation.prototype, "hcpId", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.HcpWorkLocation.prototype, "hospitalId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.HcpWorkLocation.prototype, "name", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HcpWorkLocation.prototype, "nameAr", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HcpWorkLocation.prototype, "nameEn", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HcpWorkLocation.prototype, "nameTr", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.HcpWorkLocation.prototype, "phone", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.HcpWorkLocation.prototype, "address", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HcpWorkLocation.prototype, "addressAr", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HcpWorkLocation.prototype, "addressEn", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HcpWorkLocation.prototype, "addressTr", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.HcpWorkLocation.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.HcpWorkLocation.prototype, "updatedAt", void 0);
exports.HcpWorkLocation = tslib.__decorate([
    typeorm.Entity('hcp_work_locations')
], exports.HcpWorkLocation);

exports.HospitalAdmin = class HospitalAdmin {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.HospitalAdmin.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Hospital, { nullable: true, onDelete: "SET NULL" }),
    tslib.__metadata("design:type", exports.Hospital)
], exports.HospitalAdmin.prototype, "hospital", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.HospitalAdmin.prototype, "countryId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.HospitalAdmin.prototype, "firstName", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.HospitalAdmin.prototype, "lastName", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.HospitalAdmin.prototype, "email", void 0);
tslib.__decorate([
    typeorm.Column({ type: "timestamp", nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.HospitalAdmin.prototype, "emailVerifiedAt", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.HospitalAdmin.prototype, "phone", void 0);
tslib.__decorate([
    typeorm.Column({ type: "timestamp", nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.HospitalAdmin.prototype, "phoneVerifiedAt", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.HospitalAdmin.prototype, "password", void 0);
tslib.__decorate([
    typeorm.Column({
        default: "https://s3.us-east-2.amazonaws.com/sehapracto-images/user_profile_images/Pc7bLYpjW2c56Jnb8ovCq3ZrA3rO8vPEL0j4ZsXH.jpg",
    }),
    tslib.__metadata("design:type", String)
], exports.HospitalAdmin.prototype, "profileImg", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.HospitalAdmin.prototype, "isActive", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.HospitalAdmin.prototype, "isOwner", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HospitalAdmin.prototype, "rememberToken", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.HospitalAdmin.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.HospitalAdmin.prototype, "updatedAt", void 0);
exports.HospitalAdmin = tslib.__decorate([
    typeorm.Entity("hospital_admins")
], exports.HospitalAdmin);

exports.HospitalAppointment = class HospitalAppointment {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.HospitalAppointment.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.HospitalAppointment.prototype, "user_id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.HospitalAppointment.prototype, "hospital_id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.HospitalAppointment.prototype, "hospital_department_id", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.HospitalAppointment.prototype, "hospital_doctor_id", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HospitalAppointment.prototype, "time", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HospitalAppointment.prototype, "date", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.HospitalAppointment.prototype, "status", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.HospitalAppointment.prototype, "is_rated", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.HospitalAppointment.prototype, "rating", void 0);
tslib.__decorate([
    typeorm.Column({ type: "text", nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HospitalAppointment.prototype, "rating_comment", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.HospitalAppointment.prototype, "price", void 0);
tslib.__decorate([
    typeorm.Column({ default: "Not specified" }),
    tslib.__metadata("design:type", String)
], exports.HospitalAppointment.prototype, "booked_by", void 0);
tslib.__decorate([
    typeorm.Column({ type: "timestamp", nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.HospitalAppointment.prototype, "date_time_stamp", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn({ type: "timestamp" }),
    tslib.__metadata("design:type", Date)
], exports.HospitalAppointment.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn({ type: "timestamp" }),
    tslib.__metadata("design:type", Date)
], exports.HospitalAppointment.prototype, "updated_at", void 0);
exports.HospitalAppointment = tslib.__decorate([
    typeorm.Entity("hospital_appointments")
], exports.HospitalAppointment);

exports.HospitalBranchDoctor = class HospitalBranchDoctor {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.HospitalBranchDoctor.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int" }),
    tslib.__metadata("design:type", Number)
], exports.HospitalBranchDoctor.prototype, "hospital_branch_id", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int" }),
    tslib.__metadata("design:type", Number)
], exports.HospitalBranchDoctor.prototype, "hospital_doctor_id", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn({ type: "timestamp" }),
    tslib.__metadata("design:type", Date)
], exports.HospitalBranchDoctor.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn({ type: "timestamp" }),
    tslib.__metadata("design:type", Date)
], exports.HospitalBranchDoctor.prototype, "updated_at", void 0);
exports.HospitalBranchDoctor = tslib.__decorate([
    typeorm.Entity("hospital_branch_doctors")
], exports.HospitalBranchDoctor);

exports.HospitalBranch = class HospitalBranch {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.HospitalBranch.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int" }),
    tslib.__metadata("design:type", Number)
], exports.HospitalBranch.prototype, "hospital_id", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int", nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.HospitalBranch.prototype, "city_id", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int", nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.HospitalBranch.prototype, "province_id", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar", length: 255 }),
    tslib.__metadata("design:type", String)
], exports.HospitalBranch.prototype, "name", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar", length: 255, nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HospitalBranch.prototype, "street_name", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn({ type: "timestamp" }),
    tslib.__metadata("design:type", Date)
], exports.HospitalBranch.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn({ type: "timestamp" }),
    tslib.__metadata("design:type", Date)
], exports.HospitalBranch.prototype, "updated_at", void 0);
exports.HospitalBranch = tslib.__decorate([
    typeorm.Entity("hospital_branches")
], exports.HospitalBranch);

exports.HospitalDepartment = class HospitalDepartment {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.HospitalDepartment.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.HospitalDepartment.prototype, "hospital_id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.HospitalDepartment.prototype, "medical_specialty_id", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.HospitalDepartment.prototype, "is_hidden", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn({ type: "timestamp" }),
    tslib.__metadata("design:type", Date)
], exports.HospitalDepartment.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn({ type: "timestamp" }),
    tslib.__metadata("design:type", Date)
], exports.HospitalDepartment.prototype, "updated_at", void 0);
exports.HospitalDepartment = tslib.__decorate([
    typeorm.Entity("hospital_departments")
], exports.HospitalDepartment);

exports.HospitalDoctor = class HospitalDoctor {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.HospitalDoctor.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Doctor, { nullable: false, onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.Doctor)
], exports.HospitalDoctor.prototype, "doctor", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Hospital, { nullable: false, onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.Hospital)
], exports.HospitalDoctor.prototype, "hospital", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.HospitalDepartment, { nullable: false, onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.HospitalDepartment)
], exports.HospitalDoctor.prototype, "hospitalDepartment", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.HospitalDoctor.prototype, "isAvailable", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.HospitalDoctor.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.HospitalDoctor.prototype, "updatedAt", void 0);
exports.HospitalDoctor = tslib.__decorate([
    typeorm.Entity('hospital_doctors')
], exports.HospitalDoctor);

exports.HospitalDoctorWorkHour = class HospitalDoctorWorkHour {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.HospitalDoctorWorkHour.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.HospitalDoctorWorkHour.prototype, "hospitalDoctorId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.HospitalDoctorWorkHour.prototype, "hospitalId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.HospitalDoctorWorkHour.prototype, "day", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.HospitalDoctorWorkHour.prototype, "startTime", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.HospitalDoctorWorkHour.prototype, "dayTime", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.HospitalDoctorWorkHour.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.HospitalDoctorWorkHour.prototype, "updatedAt", void 0);
exports.HospitalDoctorWorkHour = tslib.__decorate([
    typeorm.Entity('hospital_doctor_work_hours')
], exports.HospitalDoctorWorkHour);

exports.HospitalHcp = class HospitalHcp {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.HospitalHcp.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int" }),
    tslib.__metadata("design:type", Number)
], exports.HospitalHcp.prototype, "hcp_id", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int" }),
    tslib.__metadata("design:type", Number)
], exports.HospitalHcp.prototype, "hospital_id", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int" }),
    tslib.__metadata("design:type", Number)
], exports.HospitalHcp.prototype, "hospital_hcp_department_id", void 0);
tslib.__decorate([
    typeorm.Column({ type: "boolean", default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.HospitalHcp.prototype, "is_available", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn({ type: "timestamp" }),
    tslib.__metadata("design:type", Date)
], exports.HospitalHcp.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn({ type: "timestamp" }),
    tslib.__metadata("design:type", Date)
], exports.HospitalHcp.prototype, "updated_at", void 0);
exports.HospitalHcp = tslib.__decorate([
    typeorm.Entity("hospital_hcps")
], exports.HospitalHcp);

exports.HospitalHcpAppointment = class HospitalHcpAppointment {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.HospitalHcpAppointment.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.HospitalHcpAppointment.prototype, "userId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.HospitalHcpAppointment.prototype, "hospitalId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.HospitalHcpAppointment.prototype, "hospitalHcpDepartmentId", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.HospitalHcpAppointment.prototype, "hospitalHcpId", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HospitalHcpAppointment.prototype, "time", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HospitalHcpAppointment.prototype, "date", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.HospitalHcpAppointment.prototype, "status", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.HospitalHcpAppointment.prototype, "isRated", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.HospitalHcpAppointment.prototype, "rating", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.HospitalHcpAppointment.prototype, "ratingComment", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.HospitalHcpAppointment.prototype, "price", void 0);
tslib.__decorate([
    typeorm.Column({ default: 'Not specified' }),
    tslib.__metadata("design:type", String)
], exports.HospitalHcpAppointment.prototype, "bookedBy", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.HospitalHcpAppointment.prototype, "dateTimeStamp", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.HospitalHcpAppointment.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.HospitalHcpAppointment.prototype, "updatedAt", void 0);
exports.HospitalHcpAppointment = tslib.__decorate([
    typeorm.Entity('hospital_hcp_appointments')
], exports.HospitalHcpAppointment);

exports.HospitalHcpDepartment = class HospitalHcpDepartment {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.HospitalHcpDepartment.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int" }),
    tslib.__metadata("design:type", Number)
], exports.HospitalHcpDepartment.prototype, "hospital_id", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int" }),
    tslib.__metadata("design:type", Number)
], exports.HospitalHcpDepartment.prototype, "specialty_id", void 0);
tslib.__decorate([
    typeorm.Column({ type: "boolean", default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.HospitalHcpDepartment.prototype, "is_hidden", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn({ type: "timestamp" }),
    tslib.__metadata("design:type", Date)
], exports.HospitalHcpDepartment.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn({ type: "timestamp" }),
    tslib.__metadata("design:type", Date)
], exports.HospitalHcpDepartment.prototype, "updated_at", void 0);
exports.HospitalHcpDepartment = tslib.__decorate([
    typeorm.Entity("hospital_hcp_departments")
], exports.HospitalHcpDepartment);

exports.HospitalHcpWorkHour = class HospitalHcpWorkHour {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.HospitalHcpWorkHour.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.HospitalHcpWorkHour.prototype, "hospitalHcpId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.HospitalHcpWorkHour.prototype, "hospitalId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.HospitalHcpWorkHour.prototype, "day", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.HospitalHcpWorkHour.prototype, "startTime", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.HospitalHcpWorkHour.prototype, "dayTime", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.HospitalHcpWorkHour.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.HospitalHcpWorkHour.prototype, "updatedAt", void 0);
exports.HospitalHcpWorkHour = tslib.__decorate([
    typeorm.Entity('hospital_hcp_work_hours')
], exports.HospitalHcpWorkHour);

exports.HospitalImg = class HospitalImg {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.HospitalImg.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Hospital, (hospital) => hospital.id, { onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.Hospital)
], exports.HospitalImg.prototype, "hospital", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.HospitalImg.prototype, "img", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.HospitalImg.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.HospitalImg.prototype, "updated_at", void 0);
exports.HospitalImg = tslib.__decorate([
    typeorm.Entity('hospital_imgs')
], exports.HospitalImg);

exports.HospitalInsurance = class HospitalInsurance {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.HospitalInsurance.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.HospitalInsurance.prototype, "insuranceCompanyId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.HospitalInsurance.prototype, "hospitalId", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.HospitalInsurance.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.HospitalInsurance.prototype, "updatedAt", void 0);
exports.HospitalInsurance = tslib.__decorate([
    typeorm.Entity('hospital_insurances')
], exports.HospitalInsurance);

exports.HospitalLocation = class HospitalLocation {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.HospitalLocation.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Hospital, (hospital) => hospital.id, { onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.Hospital)
], exports.HospitalLocation.prototype, "hospital", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.HospitalLocation.prototype, "address", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.HospitalLocation.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.HospitalLocation.prototype, "updated_at", void 0);
exports.HospitalLocation = tslib.__decorate([
    typeorm.Entity('hospital_locations')
], exports.HospitalLocation);

exports.HospitalOtpPin = class HospitalOtpPin {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.HospitalOtpPin.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.HospitalOtpPin.prototype, "hospitalId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.HospitalOtpPin.prototype, "pin", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.HospitalOtpPin.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.HospitalOtpPin.prototype, "updatedAt", void 0);
exports.HospitalOtpPin = tslib.__decorate([
    typeorm.Entity('hospital_otp_pins')
], exports.HospitalOtpPin);

exports.HospitalRating = class HospitalRating {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.HospitalRating.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.HospitalRating.prototype, "rating", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.HospitalRating.prototype, "userId", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.User),
    typeorm.JoinColumn({ name: 'user_id' }),
    tslib.__metadata("design:type", exports.User)
], exports.HospitalRating.prototype, "user", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.HospitalRating.prototype, "hospitalId", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Hospital),
    typeorm.JoinColumn({ name: 'hospital_id' }),
    tslib.__metadata("design:type", exports.Hospital)
], exports.HospitalRating.prototype, "hospital", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text' }),
    tslib.__metadata("design:type", String)
], exports.HospitalRating.prototype, "comment", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.HospitalRating.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.HospitalRating.prototype, "updatedAt", void 0);
exports.HospitalRating = tslib.__decorate([
    typeorm.Entity('hospital_ratings')
], exports.HospitalRating);

exports.InsuranceCompany = class InsuranceCompany {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.InsuranceCompany.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Country, (country) => country.id, { onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.Country)
], exports.InsuranceCompany.prototype, "country", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', length: 255 }),
    tslib.__metadata("design:type", String)
], exports.InsuranceCompany.prototype, "name", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', length: 255, nullable: true }),
    tslib.__metadata("design:type", String)
], exports.InsuranceCompany.prototype, "name_ar", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', length: 255, nullable: true }),
    tslib.__metadata("design:type", String)
], exports.InsuranceCompany.prototype, "name_tr", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', length: 255 }),
    tslib.__metadata("design:type", String)
], exports.InsuranceCompany.prototype, "logo", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.InsuranceCompany.prototype, "about_en", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.InsuranceCompany.prototype, "about_ar", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.InsuranceCompany.prototype, "about_tr", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', length: 255, nullable: true }),
    tslib.__metadata("design:type", String)
], exports.InsuranceCompany.prototype, "video_url", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.InsuranceCompany.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.InsuranceCompany.prototype, "updated_at", void 0);
exports.InsuranceCompany = tslib.__decorate([
    typeorm.Entity('insurance_companies')
], exports.InsuranceCompany);

exports.Job = class Job {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn("increment", { type: "bigint" }),
    tslib.__metadata("design:type", Number)
], exports.Job.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    typeorm.Index(),
    tslib.__metadata("design:type", String)
], exports.Job.prototype, "queue", void 0);
tslib.__decorate([
    typeorm.Column({ type: "longtext" }),
    tslib.__metadata("design:type", String)
], exports.Job.prototype, "payload", void 0);
tslib.__decorate([
    typeorm.Column({ type: "tinyint", unsigned: true }),
    tslib.__metadata("design:type", Number)
], exports.Job.prototype, "attempts", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int", unsigned: true, nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.Job.prototype, "reserved_at", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int", unsigned: true }),
    tslib.__metadata("design:type", Number)
], exports.Job.prototype, "available_at", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int", unsigned: true }),
    tslib.__metadata("design:type", Number)
], exports.Job.prototype, "created_at", void 0);
exports.Job = tslib.__decorate([
    typeorm.Entity("jobs")
], exports.Job);

exports.LaboratoryPage = class LaboratoryPage {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.LaboratoryPage.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", Number)
], exports.LaboratoryPage.prototype, "countryId", void 0);
tslib.__decorate([
    typeorm.Column('text'),
    tslib.__metadata("design:type", String)
], exports.LaboratoryPage.prototype, "nameEn", void 0);
tslib.__decorate([
    typeorm.Column('text', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.LaboratoryPage.prototype, "nameAr", void 0);
tslib.__decorate([
    typeorm.Column('text', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.LaboratoryPage.prototype, "nameTr", void 0);
tslib.__decorate([
    typeorm.Column('text'),
    tslib.__metadata("design:type", String)
], exports.LaboratoryPage.prototype, "descriptionEn", void 0);
tslib.__decorate([
    typeorm.Column('text', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.LaboratoryPage.prototype, "descriptionAr", void 0);
tslib.__decorate([
    typeorm.Column('text', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.LaboratoryPage.prototype, "descriptionTr", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.LaboratoryPage.prototype, "contact", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.LaboratoryPage.prototype, "img", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.LaboratoryPage.prototype, "link", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.LaboratoryPage.prototype, "fbLink", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.LaboratoryPage.prototype, "igLink", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.LaboratoryPage.prototype, "twitterLink", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.LaboratoryPage.prototype, "whatsappLink", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.LaboratoryPage.prototype, "videoLink", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.LaboratoryPage.prototype, "isCreditCard", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.LaboratoryPage.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.LaboratoryPage.prototype, "updatedAt", void 0);
exports.LaboratoryPage = tslib.__decorate([
    typeorm.Entity('laboratory_pages')
], exports.LaboratoryPage);

exports.LabPageSlideImg = class LabPageSlideImg {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.LabPageSlideImg.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.LabPageSlideImg.prototype, "laboratoryPageId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.LabPageSlideImg.prototype, "imgPath", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.LabPageSlideImg.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.LabPageSlideImg.prototype, "updatedAt", void 0);
exports.LabPageSlideImg = tslib.__decorate([
    typeorm.Entity('lab_page_slide_imgs')
], exports.LabPageSlideImg);

exports.LabRequest = class LabRequest {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.LabRequest.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column('int'),
    tslib.__metadata("design:type", Number)
], exports.LabRequest.prototype, "countryId", void 0);
tslib.__decorate([
    typeorm.Column('int'),
    tslib.__metadata("design:type", Number)
], exports.LabRequest.prototype, "userId", void 0);
tslib.__decorate([
    typeorm.Column('varchar'),
    tslib.__metadata("design:type", String)
], exports.LabRequest.prototype, "paymentType", void 0);
tslib.__decorate([
    typeorm.Column('int', { default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.LabRequest.prototype, "price", void 0);
tslib.__decorate([
    typeorm.Column('varchar'),
    tslib.__metadata("design:type", String)
], exports.LabRequest.prototype, "currency", void 0);
tslib.__decorate([
    typeorm.Column('boolean', { default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.LabRequest.prototype, "isPaid", void 0);
tslib.__decorate([
    typeorm.Column('int', { default: 0 }) // 0: pending, 1: accepted, 2: done, 3: canceled
    ,
    tslib.__metadata("design:type", Number)
], exports.LabRequest.prototype, "status", void 0);
tslib.__decorate([
    typeorm.Column('timestamp'),
    tslib.__metadata("design:type", Date)
], exports.LabRequest.prototype, "dateTimeStamp", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.LabRequest.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.LabRequest.prototype, "updatedAt", void 0);
exports.LabRequest = tslib.__decorate([
    typeorm.Entity('lab_requests')
], exports.LabRequest);

exports.LabTest = class LabTest {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.LabTest.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.LabTest.prototype, "nameEn", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.LabTest.prototype, "nameAr", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.LabTest.prototype, "nameTr", void 0);
tslib.__decorate([
    typeorm.Column('text'),
    tslib.__metadata("design:type", String)
], exports.LabTest.prototype, "descriptionEn", void 0);
tslib.__decorate([
    typeorm.Column('text', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.LabTest.prototype, "descriptionAr", void 0);
tslib.__decorate([
    typeorm.Column('text', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.LabTest.prototype, "descriptionTr", void 0);
tslib.__decorate([
    typeorm.Column('int', { nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.LabTest.prototype, "priceTurkey", void 0);
tslib.__decorate([
    typeorm.Column('int', { nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.LabTest.prototype, "priceQatar", void 0);
tslib.__decorate([
    typeorm.Column('int', { default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.LabTest.prototype, "orderInList", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.LabTest.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.LabTest.prototype, "updatedAt", void 0);
exports.LabTest = tslib.__decorate([
    typeorm.Entity('lab_tests')
], exports.LabTest);

exports.LabRequestTest = class LabRequestTest {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.LabRequestTest.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column("int"),
    tslib.__metadata("design:type", Number)
], exports.LabRequestTest.prototype, "labRequestId", void 0);
tslib.__decorate([
    typeorm.Column("int"),
    tslib.__metadata("design:type", Number)
], exports.LabRequestTest.prototype, "labTestId", void 0);
tslib.__decorate([
    typeorm.Column("int"),
    tslib.__metadata("design:type", Number)
], exports.LabRequestTest.prototype, "price", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.LabRequest, (labRequest) => labRequest.id),
    typeorm.JoinColumn({ name: "lab_request_id" }),
    tslib.__metadata("design:type", exports.LabRequest)
], exports.LabRequestTest.prototype, "labRequest", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.LabTest, (labTest) => labTest.id),
    typeorm.JoinColumn({ name: "lab_test_id" }),
    tslib.__metadata("design:type", exports.LabTest)
], exports.LabRequestTest.prototype, "labTest", void 0);
tslib.__decorate([
    typeorm.Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    tslib.__metadata("design:type", Date)
], exports.LabRequestTest.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    tslib.__metadata("design:type", Date)
], exports.LabRequestTest.prototype, "updatedAt", void 0);
exports.LabRequestTest = tslib.__decorate([
    typeorm.Entity("lab_request_tests")
], exports.LabRequestTest);

exports.MedFaq = class MedFaq {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.MedFaq.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.MedFaq.prototype, "medicalSpecialtyId", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar' }),
    tslib.__metadata("design:type", String)
], exports.MedFaq.prototype, "questionEn", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar' }),
    tslib.__metadata("design:type", String)
], exports.MedFaq.prototype, "questionAr", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text' }),
    tslib.__metadata("design:type", String)
], exports.MedFaq.prototype, "answerEn", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text' }),
    tslib.__metadata("design:type", String)
], exports.MedFaq.prototype, "answerAr", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.MedFaq.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.MedFaq.prototype, "updatedAt", void 0);
exports.MedFaq = tslib.__decorate([
    typeorm.Entity('med_faqs')
], exports.MedFaq);

exports.MedicalDegree = class MedicalDegree {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.MedicalDegree.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Doctor, (doctor) => doctor.id, { onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.Doctor)
], exports.MedicalDegree.prototype, "doctor", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar' }),
    tslib.__metadata("design:type", String)
], exports.MedicalDegree.prototype, "title", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar' }),
    tslib.__metadata("design:type", String)
], exports.MedicalDegree.prototype, "img", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar' }),
    tslib.__metadata("design:type", String)
], exports.MedicalDegree.prototype, "degree_date", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.MedicalDegree.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.MedicalDegree.prototype, "updated_at", void 0);
exports.MedicalDegree = tslib.__decorate([
    typeorm.Entity('medical_degrees')
], exports.MedicalDegree);

exports.MedicalSubspecialty = class MedicalSubspecialty {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.MedicalSubspecialty.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.MedicalSpecialty, (specialty) => specialty.id, {
        onDelete: "CASCADE",
    }),
    tslib.__metadata("design:type", exports.MedicalSpecialty)
], exports.MedicalSubspecialty.prototype, "medicalSpecialty", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.MedicalSubspecialty.prototype, "name", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.MedicalSubspecialty.prototype, "name_ar", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.MedicalSubspecialty.prototype, "name_tr", void 0);
tslib.__decorate([
    typeorm.Column({ type: "text", nullable: true }),
    tslib.__metadata("design:type", String)
], exports.MedicalSubspecialty.prototype, "description", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.MedicalSubspecialty.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.MedicalSubspecialty.prototype, "updatedAt", void 0);
exports.MedicalSubspecialty = tslib.__decorate([
    typeorm.Entity("medical_subspecialties")
], exports.MedicalSubspecialty);

exports.MedicinePurchaseOrder = class MedicinePurchaseOrder {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.MedicinePurchaseOrder.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.MedicinePurchaseOrder.prototype, "userId", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int', nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.MedicinePurchaseOrder.prototype, "pharmStoreId", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int', default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.MedicinePurchaseOrder.prototype, "total", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int', default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.MedicinePurchaseOrder.prototype, "status", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', length: 255 }),
    tslib.__metadata("design:type", String)
], exports.MedicinePurchaseOrder.prototype, "currency", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text' }),
    tslib.__metadata("design:type", String)
], exports.MedicinePurchaseOrder.prototype, "address", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', length: 255, nullable: true }),
    tslib.__metadata("design:type", String)
], exports.MedicinePurchaseOrder.prototype, "prescription", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.MedicinePurchaseOrder.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.MedicinePurchaseOrder.prototype, "updatedAt", void 0);
exports.MedicinePurchaseOrder = tslib.__decorate([
    typeorm.Entity('medicine_purchase_orders')
], exports.MedicinePurchaseOrder);

exports.Membership = class Membership {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.Membership.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.Membership.prototype, "countryId", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', length: 255 }),
    tslib.__metadata("design:type", String)
], exports.Membership.prototype, "nameEn", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', length: 255 }),
    tslib.__metadata("design:type", String)
], exports.Membership.prototype, "nameAr", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', length: 255 }),
    tslib.__metadata("design:type", String)
], exports.Membership.prototype, "nameTr", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.Membership.prototype, "price", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.Membership.prototype, "priceDiscount", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text' }),
    tslib.__metadata("design:type", String)
], exports.Membership.prototype, "servicesEn", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text' }),
    tslib.__metadata("design:type", String)
], exports.Membership.prototype, "servicesAr", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text' }),
    tslib.__metadata("design:type", String)
], exports.Membership.prototype, "servicesTr", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text' }),
    tslib.__metadata("design:type", String)
], exports.Membership.prototype, "termsEn", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text' }),
    tslib.__metadata("design:type", String)
], exports.Membership.prototype, "termsAr", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text' }),
    tslib.__metadata("design:type", String)
], exports.Membership.prototype, "termsTr", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int', default: 365 }),
    tslib.__metadata("design:type", Number)
], exports.Membership.prototype, "duration", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'boolean', default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Membership.prototype, "isShow", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Membership.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Membership.prototype, "updatedAt", void 0);
exports.Membership = tslib.__decorate([
    typeorm.Entity('memberships')
], exports.Membership);

exports.Offer = class Offer {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.Offer.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.Offer.prototype, "countryId", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.Offer.prototype, "medicalSpecialtyId", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.Offer.prototype, "hospitalId", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.Offer.prototype, "offerCategoryId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.Offer.prototype, "title", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.Offer.prototype, "name", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Offer.prototype, "address", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.Offer.prototype, "img", void 0);
tslib.__decorate([
    typeorm.Column('text'),
    tslib.__metadata("design:type", String)
], exports.Offer.prototype, "details", void 0);
tslib.__decorate([
    typeorm.Column('text'),
    tslib.__metadata("design:type", String)
], exports.Offer.prototype, "ptInstruction", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.Offer.prototype, "price", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.Offer.prototype, "priceBefore", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.Offer.prototype, "discount", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.Offer.prototype, "views", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.Offer.prototype, "clicks", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.Offer.prototype, "ratingTotal", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.Offer.prototype, "ratingNumber", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Offer.prototype, "facebookLink", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Offer.prototype, "instagramLink", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Offer.prototype, "youtubeLink", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Offer.prototype, "website", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Offer.prototype, "phone", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Offer.prototype, "email", void 0);
tslib.__decorate([
    typeorm.Column('timestamp'),
    tslib.__metadata("design:type", Date)
], exports.Offer.prototype, "endDate", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Offer.prototype, "isOpen", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Offer.prototype, "isAppear", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Offer.prototype, "isShowPrice", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.Offer.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.Offer.prototype, "updatedAt", void 0);
exports.Offer = tslib.__decorate([
    typeorm.Entity('offers')
], exports.Offer);

exports.OfferAccessibility = class OfferAccessibility {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.OfferAccessibility.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column("varchar"),
    tslib.__metadata("design:type", String)
], exports.OfferAccessibility.prototype, "name", void 0);
tslib.__decorate([
    typeorm.Column("varchar"),
    tslib.__metadata("design:type", String)
], exports.OfferAccessibility.prototype, "nameEn", void 0);
tslib.__decorate([
    typeorm.Column("varchar"),
    tslib.__metadata("design:type", String)
], exports.OfferAccessibility.prototype, "nameAr", void 0);
tslib.__decorate([
    typeorm.Column("varchar"),
    tslib.__metadata("design:type", String)
], exports.OfferAccessibility.prototype, "nameTr", void 0);
tslib.__decorate([
    typeorm.Column("varchar"),
    tslib.__metadata("design:type", String)
], exports.OfferAccessibility.prototype, "icon", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.OfferAccessibility.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.OfferAccessibility.prototype, "updatedAt", void 0);
exports.OfferAccessibility = tslib.__decorate([
    typeorm.Entity("offer_accessabilities")
], exports.OfferAccessibility);

exports.OfferCategory = class OfferCategory {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.OfferCategory.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.OfferCategory.prototype, "name", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true, nullable: true }),
    tslib.__metadata("design:type", String)
], exports.OfferCategory.prototype, "nameAr", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true, nullable: true }),
    tslib.__metadata("design:type", String)
], exports.OfferCategory.prototype, "nameEn", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true, nullable: true }),
    tslib.__metadata("design:type", String)
], exports.OfferCategory.prototype, "nameTr", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.OfferCategory.prototype, "img", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.OfferCategory.prototype, "isAppear", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.OfferCategory.prototype, "isLargeImg", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.OfferCategory.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.OfferCategory.prototype, "updatedAt", void 0);
exports.OfferCategory = tslib.__decorate([
    typeorm.Entity('offer_categories')
], exports.OfferCategory);

exports.Offering = class Offering {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.Offering.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int" }),
    tslib.__metadata("design:type", Number)
], exports.Offering.prototype, "countryId", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int", nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.Offering.prototype, "cityId", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int", nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.Offering.prototype, "hospitalId", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int", nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.Offering.prototype, "serviceProviderId", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar" }),
    tslib.__metadata("design:type", String)
], exports.Offering.prototype, "title", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar", nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Offering.prototype, "titleEn", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar", nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Offering.prototype, "titleAr", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar", nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Offering.prototype, "titleTr", void 0);
tslib.__decorate([
    typeorm.Column({ type: "text" }),
    tslib.__metadata("design:type", String)
], exports.Offering.prototype, "details", void 0);
tslib.__decorate([
    typeorm.Column({ type: "text", nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Offering.prototype, "detailsEn", void 0);
tslib.__decorate([
    typeorm.Column({ type: "text", nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Offering.prototype, "detailsAr", void 0);
tslib.__decorate([
    typeorm.Column({ type: "text", nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Offering.prototype, "detailsTr", void 0);
tslib.__decorate([
    typeorm.Column({ type: "text" }),
    tslib.__metadata("design:type", String)
], exports.Offering.prototype, "instructions", void 0);
tslib.__decorate([
    typeorm.Column({ type: "text", nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Offering.prototype, "instructionsEn", void 0);
tslib.__decorate([
    typeorm.Column({ type: "text", nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Offering.prototype, "instructionsAr", void 0);
tslib.__decorate([
    typeorm.Column({ type: "text", nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Offering.prototype, "instructionsTr", void 0);
tslib.__decorate([
    typeorm.Column({
        type: "varchar",
        default: "https://www.sehapracto.com/pics/logo.png",
    }),
    tslib.__metadata("design:type", String)
], exports.Offering.prototype, "coverImg", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar" }),
    tslib.__metadata("design:type", String)
], exports.Offering.prototype, "whatsapp", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar" }),
    tslib.__metadata("design:type", String)
], exports.Offering.prototype, "email", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar", nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Offering.prototype, "website", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar", nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Offering.prototype, "facebookLink", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar", nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Offering.prototype, "instagramLink", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar", nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Offering.prototype, "twitterLink", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar", nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Offering.prototype, "youtubeLink", void 0);
tslib.__decorate([
    typeorm.Column({ type: "boolean", default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Offering.prototype, "isPremium", void 0);
tslib.__decorate([
    typeorm.Column({ type: "boolean", default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Offering.prototype, "isApproved", void 0);
tslib.__decorate([
    typeorm.Column({ type: "double", nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.Offering.prototype, "longitude", void 0);
tslib.__decorate([
    typeorm.Column({ type: "double", nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.Offering.prototype, "latitude", void 0);
tslib.__decorate([
    typeorm.Column({ type: "timestamp", nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.Offering.prototype, "startDate", void 0);
tslib.__decorate([
    typeorm.Column({ type: "timestamp", nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.Offering.prototype, "endDate", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int", default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.Offering.prototype, "rating", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int", default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.Offering.prototype, "ratingNumber", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Offering.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Offering.prototype, "updatedAt", void 0);
exports.Offering = tslib.__decorate([
    typeorm.Entity("offerings")
], exports.Offering);

exports.OfferingCoupon = class OfferingCoupon {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.OfferingCoupon.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int" }),
    tslib.__metadata("design:type", Number)
], exports.OfferingCoupon.prototype, "offeringId", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Offer, (offer) => offer.id)
    // @JoinColumn({ name: 'offering_id' })
    ,
    tslib.__metadata("design:type", exports.Offer)
], exports.OfferingCoupon.prototype, "offering", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int", nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.OfferingCoupon.prototype, "membershipId", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Membership, (membership) => membership.id, {
        nullable: true,
    })
    // @JoinColumn({ name: 'membership_id' })
    ,
    tslib.__metadata("design:type", exports.Membership)
], exports.OfferingCoupon.prototype, "membership", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int" }),
    tslib.__metadata("design:type", Number)
], exports.OfferingCoupon.prototype, "discountTypeId", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.DiscountType, (discountType) => discountType.id)
    //   @JoinColumn({ name: "discount_type_id" })
    ,
    tslib.__metadata("design:type", exports.DiscountType)
], exports.OfferingCoupon.prototype, "discountType", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar", length: 255 }),
    tslib.__metadata("design:type", String)
], exports.OfferingCoupon.prototype, "title", void 0);
tslib.__decorate([
    typeorm.Column({ type: "text" }),
    tslib.__metadata("design:type", String)
], exports.OfferingCoupon.prototype, "howToUse", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int", default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.OfferingCoupon.prototype, "price", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int", default: 1 }),
    tslib.__metadata("design:type", Number)
], exports.OfferingCoupon.prototype, "numberUses", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int" }),
    tslib.__metadata("design:type", Number)
], exports.OfferingCoupon.prototype, "useFrequency", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int", default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.OfferingCoupon.prototype, "savedAmount", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int", default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.OfferingCoupon.prototype, "discountPercentage", void 0);
tslib.__decorate([
    typeorm.Column({ type: "boolean", default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.OfferingCoupon.prototype, "isActive", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.OfferingCoupon.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.OfferingCoupon.prototype, "updatedAt", void 0);
exports.OfferingCoupon = tslib.__decorate([
    typeorm.Entity("offering_coupons")
], exports.OfferingCoupon);

exports.OfferingRating = class OfferingRating {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.OfferingRating.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.OfferingRating.prototype, "rating", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.OfferingRating.prototype, "userId", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.User, (user) => user.id)
    // @JoinColumn({ name: 'user_id' })
    ,
    tslib.__metadata("design:type", exports.User)
], exports.OfferingRating.prototype, "user", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.OfferingRating.prototype, "offeringId", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Offer, (offer) => offer.id)
    // @JoinColumn({ name: 'offering_id' })
    ,
    tslib.__metadata("design:type", exports.Offer)
], exports.OfferingRating.prototype, "offering", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text' }),
    tslib.__metadata("design:type", String)
], exports.OfferingRating.prototype, "comment", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.OfferingRating.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.OfferingRating.prototype, "updatedAt", void 0);
exports.OfferingRating = tslib.__decorate([
    typeorm.Entity('offering_ratings')
], exports.OfferingRating);

exports.OfferingSelectedCategory = class OfferingSelectedCategory {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.OfferingSelectedCategory.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int" }),
    tslib.__metadata("design:type", Number)
], exports.OfferingSelectedCategory.prototype, "offeringId", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Offer, (offer) => offer.id)
    // @JoinColumn({ name: 'offering_id' })
    ,
    tslib.__metadata("design:type", exports.Offer)
], exports.OfferingSelectedCategory.prototype, "offering", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int" }),
    tslib.__metadata("design:type", Number)
], exports.OfferingSelectedCategory.prototype, "offerCategoryId", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.OfferCategory, (category) => category.id)
    //   @JoinColumn({ name: "offer_category_id" })
    ,
    tslib.__metadata("design:type", exports.OfferCategory)
], exports.OfferingSelectedCategory.prototype, "offerCategory", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.OfferingSelectedCategory.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.OfferingSelectedCategory.prototype, "updatedAt", void 0);
exports.OfferingSelectedCategory = tslib.__decorate([
    typeorm.Entity("offering_selected_categories")
], exports.OfferingSelectedCategory);

exports.OfferingSlideImg = class OfferingSlideImg {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.OfferingSlideImg.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int" }),
    tslib.__metadata("design:type", Number)
], exports.OfferingSlideImg.prototype, "offeringId", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Offer, (offer) => offer.id)
    // @JoinColumn({ name: 'offering_id' })
    ,
    tslib.__metadata("design:type", exports.Offer)
], exports.OfferingSlideImg.prototype, "offering", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar" }),
    tslib.__metadata("design:type", String)
], exports.OfferingSlideImg.prototype, "imgPath", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.OfferingSlideImg.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.OfferingSlideImg.prototype, "updatedAt", void 0);
exports.OfferingSlideImg = tslib.__decorate([
    typeorm.Entity("offering_slide_imgs")
], exports.OfferingSlideImg);

exports.OfferSubCategory = class OfferSubCategory {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.OfferSubCategory.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.OfferCategory, (category) => category.id)
    // @JoinColumn({ name: "offer_category_id" })
    ,
    tslib.__metadata("design:type", exports.OfferCategory)
], exports.OfferSubCategory.prototype, "offerCategory", void 0);
tslib.__decorate([
    typeorm.Column("varchar", { unique: true }),
    tslib.__metadata("design:type", String)
], exports.OfferSubCategory.prototype, "nameEn", void 0);
tslib.__decorate([
    typeorm.Column("varchar", { unique: true }),
    tslib.__metadata("design:type", String)
], exports.OfferSubCategory.prototype, "nameAr", void 0);
tslib.__decorate([
    typeorm.Column("varchar", { unique: true }),
    tslib.__metadata("design:type", String)
], exports.OfferSubCategory.prototype, "nameTr", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.OfferSubCategory.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.OfferSubCategory.prototype, "updatedAt", void 0);
exports.OfferSubCategory = tslib.__decorate([
    typeorm.Entity("offer_sub_categories")
], exports.OfferSubCategory);

exports.PasswordReset = class PasswordReset {
};
tslib.__decorate([
    typeorm.PrimaryColumn(),
    tslib.__metadata("design:type", String)
], exports.PasswordReset.prototype, "email", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.PasswordReset.prototype, "token", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn({ nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.PasswordReset.prototype, "created_at", void 0);
exports.PasswordReset = tslib.__decorate([
    typeorm.Entity('password_resets')
], exports.PasswordReset);

exports.PatientHcpConversation = class PatientHcpConversation {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.PatientHcpConversation.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.HCP, { nullable: false, onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.HCP)
], exports.PatientHcpConversation.prototype, "hcp", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.User, { nullable: false, onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.User)
], exports.PatientHcpConversation.prototype, "user", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.PatientHcpConversation.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.PatientHcpConversation.prototype, "updatedAt", void 0);
exports.PatientHcpConversation = tslib.__decorate([
    typeorm.Entity('patient_hcp_conversations')
], exports.PatientHcpConversation);

exports.PatientHcpMessage = class PatientHcpMessage {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.PatientHcpMessage.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.PatientHcpConversation, {
        nullable: false,
        onDelete: "CASCADE",
    }),
    tslib.__metadata("design:type", exports.PatientHcpConversation)
], exports.PatientHcpMessage.prototype, "patientHcpConversation", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.PatientHcpMessage.prototype, "sender", void 0);
tslib.__decorate([
    typeorm.Column("text"),
    tslib.__metadata("design:type", String)
], exports.PatientHcpMessage.prototype, "message", void 0);
tslib.__decorate([
    typeorm.Column({ default: "txt" }),
    tslib.__metadata("design:type", String)
], exports.PatientHcpMessage.prototype, "msgType", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.PatientHcpMessage.prototype, "fileLink", void 0);
tslib.__decorate([
    typeorm.Column({ type: "boolean", default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.PatientHcpMessage.prototype, "isSeen", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.PatientHcpMessage.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.PatientHcpMessage.prototype, "updatedAt", void 0);
exports.PatientHcpMessage = tslib.__decorate([
    typeorm.Entity("patient_hcp_messages")
], exports.PatientHcpMessage);

exports.PersonalAccessToken = class PersonalAccessToken {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.PersonalAccessToken.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.PersonalAccessToken.prototype, "tokenable_type", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.PersonalAccessToken.prototype, "tokenable_id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.PersonalAccessToken.prototype, "name", void 0);
tslib.__decorate([
    typeorm.Column({ length: 64, unique: true }),
    tslib.__metadata("design:type", String)
], exports.PersonalAccessToken.prototype, "token", void 0);
tslib.__decorate([
    typeorm.Column('text', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.PersonalAccessToken.prototype, "abilities", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.PersonalAccessToken.prototype, "last_used_at", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.PersonalAccessToken.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.PersonalAccessToken.prototype, "updated_at", void 0);
exports.PersonalAccessToken = tslib.__decorate([
    typeorm.Entity('personal_access_tokens')
], exports.PersonalAccessToken);

exports.Pharmacy = class Pharmacy {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.Pharmacy.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Country, { nullable: false, onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.Country)
], exports.Pharmacy.prototype, "country", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.City, { nullable: true, onDelete: 'SET NULL' }),
    tslib.__metadata("design:type", exports.City)
], exports.Pharmacy.prototype, "city", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.Pharmacy.prototype, "name", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Pharmacy.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Pharmacy.prototype, "updatedAt", void 0);
exports.Pharmacy = tslib.__decorate([
    typeorm.Entity('pharmacies')
], exports.Pharmacy);

exports.PharmStore = class PharmStore {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.PharmStore.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.PharmStore.prototype, "countryId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.PharmStore.prototype, "pharmacyId", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.PharmStore.prototype, "name", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.PharmStore.prototype, "email", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.PharmStore.prototype, "emailVerifiedAt", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.PharmStore.prototype, "phone", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.PharmStore.prototype, "phoneVerifiedAt", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.PharmStore.prototype, "password", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.PharmStore.prototype, "isActive", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.PharmStore.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.PharmStore.prototype, "updatedAt", void 0);
exports.PharmStore = tslib.__decorate([
    typeorm.Entity('pharm_stores')
], exports.PharmStore);

exports.PopupAd = class PopupAd {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.PopupAd.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.PopupAd.prototype, "countryId", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.PopupAd.prototype, "img", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.PopupAd.prototype, "action", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.PopupAd.prototype, "actionId", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.PopupAd.prototype, "actionUrl", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.PopupAd.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.PopupAd.prototype, "updatedAt", void 0);
exports.PopupAd = tslib.__decorate([
    typeorm.Entity('popup_ads')
], exports.PopupAd);

exports.Practice = class Practice {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.Practice.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Country, (country) => country.id, { onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.Country)
], exports.Practice.prototype, "country", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Doctor, (doctor) => doctor.id, { onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.Doctor)
], exports.Practice.prototype, "doctor", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'string' }),
    tslib.__metadata("design:type", String)
], exports.Practice.prototype, "name", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'string' }),
    tslib.__metadata("design:type", String)
], exports.Practice.prototype, "img", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'string', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Practice.prototype, "phone", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Practice.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Practice.prototype, "updated_at", void 0);
exports.Practice = tslib.__decorate([
    typeorm.Entity('practices')
], exports.Practice);

exports.PracticeDoctor = class PracticeDoctor {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.PracticeDoctor.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Practice, (practice) => practice.id, { onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.Practice)
], exports.PracticeDoctor.prototype, "practice", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Doctor, (doctor) => doctor.id, { onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.Doctor)
], exports.PracticeDoctor.prototype, "doctor", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.PracticeDoctor.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.PracticeDoctor.prototype, "updated_at", void 0);
exports.PracticeDoctor = tslib.__decorate([
    typeorm.Entity('practice_doctors')
], exports.PracticeDoctor);

exports.PracticeInsurance = class PracticeInsurance {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.PracticeInsurance.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.InsuranceCompany, (insuranceCompany) => insuranceCompany.id, { onDelete: "CASCADE" }),
    tslib.__metadata("design:type", exports.InsuranceCompany)
], exports.PracticeInsurance.prototype, "insuranceCompany", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Practice, (practice) => practice.id, { onDelete: "CASCADE" }),
    tslib.__metadata("design:type", exports.Practice)
], exports.PracticeInsurance.prototype, "practice", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.PracticeInsurance.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.PracticeInsurance.prototype, "updated_at", void 0);
exports.PracticeInsurance = tslib.__decorate([
    typeorm.Entity("practice_insurances")
], exports.PracticeInsurance);

exports.PracticeLocation = class PracticeLocation {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.PracticeLocation.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Practice, (practice) => practice.id, { onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.Practice)
], exports.PracticeLocation.prototype, "practice", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.PracticeLocation.prototype, "location", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.PracticeLocation.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.PracticeLocation.prototype, "updated_at", void 0);
exports.PracticeLocation = tslib.__decorate([
    typeorm.Entity('practice_locations')
], exports.PracticeLocation);

exports.Province = class Province {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.Province.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.City, { nullable: false, onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.City)
], exports.Province.prototype, "city", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.Province.prototype, "name", void 0);
tslib.__decorate([
    typeorm.Column({ unique: true }),
    tslib.__metadata("design:type", String)
], exports.Province.prototype, "nameAr", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Province.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Province.prototype, "updatedAt", void 0);
exports.Province = tslib.__decorate([
    typeorm.Entity('provinces')
], exports.Province);

exports.PurchasedMedicine = class PurchasedMedicine {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.PurchasedMedicine.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.PurchasedMedicine.prototype, "medicinePurchaseOrderId", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.PurchasedMedicine.prototype, "medicineId", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', length: 255 }),
    tslib.__metadata("design:type", String)
], exports.PurchasedMedicine.prototype, "nameEn", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', length: 255 }),
    tslib.__metadata("design:type", String)
], exports.PurchasedMedicine.prototype, "nameAr", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', length: 255 }),
    tslib.__metadata("design:type", String)
], exports.PurchasedMedicine.prototype, "nameTr", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', length: 255 }),
    tslib.__metadata("design:type", String)
], exports.PurchasedMedicine.prototype, "img", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.PurchasedMedicine.prototype, "count", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.PurchasedMedicine.prototype, "price", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.PurchasedMedicine.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.PurchasedMedicine.prototype, "updatedAt", void 0);
exports.PurchasedMedicine = tslib.__decorate([
    typeorm.Entity('purchased_medicines')
], exports.PurchasedMedicine);

exports.QuestionDoctor = class QuestionDoctor {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.QuestionDoctor.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.QuestionDoctor.prototype, "userId", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.QuestionDoctor.prototype, "doctorId", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.QuestionDoctor.prototype, "medicalSpecialtyId", void 0);
tslib.__decorate([
    typeorm.Column('text'),
    tslib.__metadata("design:type", String)
], exports.QuestionDoctor.prototype, "content", void 0);
tslib.__decorate([
    typeorm.Column({ default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.QuestionDoctor.prototype, "isAppear", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.QuestionDoctor.prototype, "status", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.QuestionDoctor.prototype, "views", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.QuestionDoctor.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.QuestionDoctor.prototype, "updatedAt", void 0);
exports.QuestionDoctor = tslib.__decorate([
    typeorm.Entity('question_doctors')
], exports.QuestionDoctor);

exports.Reminder = class Reminder {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.Reminder.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Reminder.prototype, "userNumber", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Reminder.prototype, "userFcmToken", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp' }),
    tslib.__metadata("design:type", Date)
], exports.Reminder.prototype, "originalTime", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp' }),
    tslib.__metadata("design:type", Date)
], exports.Reminder.prototype, "reminderTime", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.Reminder.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.Reminder.prototype, "updatedAt", void 0);
exports.Reminder = tslib.__decorate([
    typeorm.Entity('reminders')
], exports.Reminder);

exports.RewardPoints = class RewardPoints {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.RewardPoints.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int', default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.RewardPoints.prototype, "bookAppointment", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int', default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.RewardPoints.prototype, "bookOnlineAppointment", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int', default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.RewardPoints.prototype, "offerReview", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int', default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.RewardPoints.prototype, "bookOffer", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int', default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.RewardPoints.prototype, "updateProfile", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int', default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.RewardPoints.prototype, "bookLabTest", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int', default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.RewardPoints.prototype, "blogComment", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.RewardPoints.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.RewardPoints.prototype, "updatedAt", void 0);
exports.RewardPoints = tslib.__decorate([
    typeorm.Entity('reward_points')
], exports.RewardPoints);

exports.ServiceProvider = class ServiceProvider {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.ServiceProvider.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column('int'),
    tslib.__metadata("design:type", Number)
], exports.ServiceProvider.prototype, "countryId", void 0);
tslib.__decorate([
    typeorm.Column('int', { nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.ServiceProvider.prototype, "cityId", void 0);
tslib.__decorate([
    typeorm.Column('varchar'),
    tslib.__metadata("design:type", String)
], exports.ServiceProvider.prototype, "uniqueId", void 0);
tslib.__decorate([
    typeorm.Column('varchar', { unique: true }),
    tslib.__metadata("design:type", String)
], exports.ServiceProvider.prototype, "specialCode", void 0);
tslib.__decorate([
    typeorm.Column('varchar'),
    tslib.__metadata("design:type", String)
], exports.ServiceProvider.prototype, "name", void 0);
tslib.__decorate([
    typeorm.Column('varchar', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.ServiceProvider.prototype, "nameAr", void 0);
tslib.__decorate([
    typeorm.Column('varchar', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.ServiceProvider.prototype, "nameEn", void 0);
tslib.__decorate([
    typeorm.Column('varchar', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.ServiceProvider.prototype, "nameTr", void 0);
tslib.__decorate([
    typeorm.Column('varchar', { unique: true }),
    tslib.__metadata("design:type", String)
], exports.ServiceProvider.prototype, "email", void 0);
tslib.__decorate([
    typeorm.Column('timestamp', { nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.ServiceProvider.prototype, "emailVerifiedAt", void 0);
tslib.__decorate([
    typeorm.Column('varchar', { unique: true }),
    tslib.__metadata("design:type", String)
], exports.ServiceProvider.prototype, "phone", void 0);
tslib.__decorate([
    typeorm.Column('timestamp', { nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.ServiceProvider.prototype, "phoneVerifiedAt", void 0);
tslib.__decorate([
    typeorm.Column('int', { default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.ServiceProvider.prototype, "balance", void 0);
tslib.__decorate([
    typeorm.Column('varchar', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.ServiceProvider.prototype, "password", void 0);
tslib.__decorate([
    typeorm.Column('varchar', { nullable: true, default: 'https://sehapracto-images.s3.us-east-2.amazonaws.com/newavatar.png' }),
    tslib.__metadata("design:type", String)
], exports.ServiceProvider.prototype, "profileImg", void 0);
tslib.__decorate([
    typeorm.Column('varchar', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.ServiceProvider.prototype, "address", void 0);
tslib.__decorate([
    typeorm.Column('varchar', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.ServiceProvider.prototype, "addressAr", void 0);
tslib.__decorate([
    typeorm.Column('varchar', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.ServiceProvider.prototype, "addressEn", void 0);
tslib.__decorate([
    typeorm.Column('varchar', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.ServiceProvider.prototype, "addressTr", void 0);
tslib.__decorate([
    typeorm.Column('double', { nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.ServiceProvider.prototype, "longitude", void 0);
tslib.__decorate([
    typeorm.Column('double', { nullable: true }),
    tslib.__metadata("design:type", Number)
], exports.ServiceProvider.prototype, "latitude", void 0);
tslib.__decorate([
    typeorm.Column('text', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.ServiceProvider.prototype, "bio", void 0);
tslib.__decorate([
    typeorm.Column('text', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.ServiceProvider.prototype, "bioAr", void 0);
tslib.__decorate([
    typeorm.Column('text', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.ServiceProvider.prototype, "bioEn", void 0);
tslib.__decorate([
    typeorm.Column('text', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.ServiceProvider.prototype, "bioTr", void 0);
tslib.__decorate([
    typeorm.Column('varchar', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.ServiceProvider.prototype, "facebookLink", void 0);
tslib.__decorate([
    typeorm.Column('varchar', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.ServiceProvider.prototype, "instagramLink", void 0);
tslib.__decorate([
    typeorm.Column('varchar', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.ServiceProvider.prototype, "twitterLink", void 0);
tslib.__decorate([
    typeorm.Column('varchar', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.ServiceProvider.prototype, "linkedinLink", void 0);
tslib.__decorate([
    typeorm.Column('varchar', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.ServiceProvider.prototype, "youtubeLink", void 0);
tslib.__decorate([
    typeorm.Column('int', { default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.ServiceProvider.prototype, "rating", void 0);
tslib.__decorate([
    typeorm.Column('int', { default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.ServiceProvider.prototype, "numberRatings", void 0);
tslib.__decorate([
    typeorm.Column('boolean', { default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.ServiceProvider.prototype, "isActive", void 0);
tslib.__decorate([
    typeorm.Column('varchar', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.ServiceProvider.prototype, "fcmToken", void 0);
tslib.__decorate([
    typeorm.Column('boolean', { default: false, nullable: true }),
    tslib.__metadata("design:type", Boolean)
], exports.ServiceProvider.prototype, "isToDelete", void 0);
tslib.__decorate([
    typeorm.Column('timestamp', { nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.ServiceProvider.prototype, "deleteDate", void 0);
tslib.__decorate([
    typeorm.Column('boolean', { default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.ServiceProvider.prototype, "isDeleted", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.ServiceProvider.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.ServiceProvider.prototype, "updatedAt", void 0);
exports.ServiceProvider = tslib.__decorate([
    typeorm.Entity('service_providers')
], exports.ServiceProvider);

exports.ServiceProviderAccessability = class ServiceProviderAccessability {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.ServiceProviderAccessability.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.OfferAccessibility, (accessability) => accessability.id)
    // @JoinColumn({ name: "offer_accessability_id" })
    ,
    tslib.__metadata("design:type", exports.OfferAccessibility)
], exports.ServiceProviderAccessability.prototype, "offerAccessability", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.ServiceProvider, (provider) => provider.id)
    // @JoinColumn({ name: "service_provider_id" })
    ,
    tslib.__metadata("design:type", exports.ServiceProvider)
], exports.ServiceProviderAccessability.prototype, "serviceProvider", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.ServiceProviderAccessability.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.ServiceProviderAccessability.prototype, "updatedAt", void 0);
exports.ServiceProviderAccessability = tslib.__decorate([
    typeorm.Entity("service_provider_accessabilities")
], exports.ServiceProviderAccessability);

exports.Session = class Session {
};
tslib.__decorate([
    typeorm.PrimaryColumn(),
    tslib.__metadata("design:type", String)
], exports.Session.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.User, (user) => user.id, { nullable: true, onDelete: 'CASCADE' }),
    typeorm.Index(),
    tslib.__metadata("design:type", exports.User)
], exports.Session.prototype, "user_id", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', length: 45, nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Session.prototype, "ip_address", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Session.prototype, "user_agent", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text' }),
    tslib.__metadata("design:type", String)
], exports.Session.prototype, "payload", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    typeorm.Index(),
    tslib.__metadata("design:type", Number)
], exports.Session.prototype, "last_activity", void 0);
exports.Session = tslib.__decorate([
    typeorm.Entity('sessions')
], exports.Session);

exports.Slide = class Slide {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.Slide.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Country, (country) => country.id, { onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.Country)
], exports.Slide.prototype, "country", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text' }),
    tslib.__metadata("design:type", String)
], exports.Slide.prototype, "name", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Slide.prototype, "name_ar", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Slide.prototype, "name_en", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Slide.prototype, "name_tr", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text' }),
    tslib.__metadata("design:type", String)
], exports.Slide.prototype, "description", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Slide.prototype, "description_ar", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Slide.prototype, "description_en", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Slide.prototype, "description_tr", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'string' }),
    tslib.__metadata("design:type", String)
], exports.Slide.prototype, "contact", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'string' }),
    tslib.__metadata("design:type", String)
], exports.Slide.prototype, "img", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'string' }),
    tslib.__metadata("design:type", String)
], exports.Slide.prototype, "link", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'string', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Slide.prototype, "fb_link", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'string', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Slide.prototype, "ig_link", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'string', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Slide.prototype, "twitter_link", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'string', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Slide.prototype, "whatsapp_link", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'string', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Slide.prototype, "video_link", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'string' }),
    tslib.__metadata("design:type", String)
], exports.Slide.prototype, "client_name", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'string' }),
    tslib.__metadata("design:type", String)
], exports.Slide.prototype, "client_adress", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'string' }),
    tslib.__metadata("design:type", String)
], exports.Slide.prototype, "duration", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int', default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.Slide.prototype, "clicks", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int', default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.Slide.prototype, "views", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'boolean', default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.Slide.prototype, "is_active", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Slide.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Slide.prototype, "updated_at", void 0);
exports.Slide = tslib.__decorate([
    typeorm.Entity('slides')
], exports.Slide);

exports.SlideImage = class SlideImage {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.SlideImage.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.SlideImage.prototype, "slide_id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.SlideImage.prototype, "img_path", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn({ type: "timestamp" }),
    tslib.__metadata("design:type", Date)
], exports.SlideImage.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn({ type: "timestamp" }),
    tslib.__metadata("design:type", Date)
], exports.SlideImage.prototype, "updated_at", void 0);
exports.SlideImage = tslib.__decorate([
    typeorm.Entity("slide_images")
], exports.SlideImage);

exports.SlideService = class SlideService {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.SlideService.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.SlideService.prototype, "slide_id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.SlideService.prototype, "name", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.SlideService.prototype, "img_path", void 0);
tslib.__decorate([
    typeorm.Column({ default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.SlideService.prototype, "price", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn({ type: "timestamp" }),
    tslib.__metadata("design:type", Date)
], exports.SlideService.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn({ type: "timestamp" }),
    tslib.__metadata("design:type", Date)
], exports.SlideService.prototype, "updated_at", void 0);
exports.SlideService = tslib.__decorate([
    typeorm.Entity("slide_services")
], exports.SlideService);

exports.Specialty = class Specialty {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.Specialty.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', unique: true }),
    tslib.__metadata("design:type", String)
], exports.Specialty.prototype, "name", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', unique: true }),
    tslib.__metadata("design:type", String)
], exports.Specialty.prototype, "name_ar", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar' }),
    tslib.__metadata("design:type", String)
], exports.Specialty.prototype, "img", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Specialty.prototype, "description", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Specialty.prototype, "meta_desc_en", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'text', nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Specialty.prototype, "meta_desc_ar", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Specialty.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.Specialty.prototype, "updated_at", void 0);
exports.Specialty = tslib.__decorate([
    typeorm.Entity('specialties')
], exports.Specialty);

exports.Transaction = class Transaction {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.Transaction.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column('varchar'),
    tslib.__metadata("design:type", String)
], exports.Transaction.prototype, "type", void 0);
tslib.__decorate([
    typeorm.Column('varchar'),
    tslib.__metadata("design:type", String)
], exports.Transaction.prototype, "typeId", void 0);
tslib.__decorate([
    typeorm.Column('varchar'),
    tslib.__metadata("design:type", String)
], exports.Transaction.prototype, "userType", void 0);
tslib.__decorate([
    typeorm.Column('varchar'),
    tslib.__metadata("design:type", String)
], exports.Transaction.prototype, "userId", void 0);
tslib.__decorate([
    typeorm.Column('varchar', { nullable: true }),
    tslib.__metadata("design:type", String)
], exports.Transaction.prototype, "orderId", void 0);
tslib.__decorate([
    typeorm.Column('varchar'),
    tslib.__metadata("design:type", String)
], exports.Transaction.prototype, "transactionType", void 0);
tslib.__decorate([
    typeorm.Column('int'),
    tslib.__metadata("design:type", Number)
], exports.Transaction.prototype, "value", void 0);
tslib.__decorate([
    typeorm.Column('varchar'),
    tslib.__metadata("design:type", String)
], exports.Transaction.prototype, "currency", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.Transaction.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib.__metadata("design:type", Date)
], exports.Transaction.prototype, "updatedAt", void 0);
exports.Transaction = tslib.__decorate([
    typeorm.Entity('transactions')
], exports.Transaction);

exports.UserCoupon = class UserCoupon {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.UserCoupon.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.UserCoupon.prototype, "userId", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.User),
    typeorm.JoinColumn({ name: 'user_id' }),
    tslib.__metadata("design:type", exports.User)
], exports.UserCoupon.prototype, "user", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.UserCoupon.prototype, "offeringCouponId", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.OfferingCoupon),
    typeorm.JoinColumn({ name: 'offering_coupon_id' }),
    tslib.__metadata("design:type", exports.OfferingCoupon)
], exports.UserCoupon.prototype, "offeringCoupon", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.UserCoupon.prototype, "offeringId", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Offer, offer => offer.id)
    // @JoinColumn({ name: 'offering_id' })
    ,
    tslib.__metadata("design:type", exports.Offer)
], exports.UserCoupon.prototype, "offering", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.UserCoupon.prototype, "serviceProviderId", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.ServiceProvider),
    typeorm.JoinColumn({ name: 'service_provider_id' }),
    tslib.__metadata("design:type", exports.ServiceProvider)
], exports.UserCoupon.prototype, "serviceProvider", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.UserCoupon.prototype, "maxAllowedUses", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int', default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.UserCoupon.prototype, "numberUsed", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int', default: 0 }),
    tslib.__metadata("design:type", Number)
], exports.UserCoupon.prototype, "status", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.UserCoupon.prototype, "frequency", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar', length: 255 }),
    tslib.__metadata("design:type", String)
], exports.UserCoupon.prototype, "uniqueCode", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp', nullable: true }),
    tslib.__metadata("design:type", Date)
], exports.UserCoupon.prototype, "lastUsed", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.UserCoupon.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.UserCoupon.prototype, "updatedAt", void 0);
exports.UserCoupon = tslib.__decorate([
    typeorm.Entity('user_coupons')
], exports.UserCoupon);

exports.UserNotification = class UserNotification {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.UserNotification.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.User, { nullable: false, onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.User)
], exports.UserNotification.prototype, "user", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.UserNotification.prototype, "title", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.UserNotification.prototype, "titleAr", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.UserNotification.prototype, "context", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.UserNotification.prototype, "contextAr", void 0);
tslib.__decorate([
    typeorm.Column({ nullable: true }),
    tslib.__metadata("design:type", String)
], exports.UserNotification.prototype, "action", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'boolean', default: false }),
    tslib.__metadata("design:type", Boolean)
], exports.UserNotification.prototype, "isRead", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.UserNotification.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.UserNotification.prototype, "updatedAt", void 0);
exports.UserNotification = tslib.__decorate([
    typeorm.Entity('user_notifications')
], exports.UserNotification);

exports.UserOtpPin = class UserOtpPin {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.UserOtpPin.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: "int" }),
    tslib.__metadata("design:type", Number)
], exports.UserOtpPin.prototype, "user_id", void 0);
tslib.__decorate([
    typeorm.Column({ type: "varchar", length: 255 }),
    tslib.__metadata("design:type", String)
], exports.UserOtpPin.prototype, "pin", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn({ type: "timestamp" }),
    tslib.__metadata("design:type", Date)
], exports.UserOtpPin.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn({ type: "timestamp" }),
    tslib.__metadata("design:type", Date)
], exports.UserOtpPin.prototype, "updated_at", void 0);
exports.UserOtpPin = tslib.__decorate([
    typeorm.Entity("user_otp_pins")
], exports.UserOtpPin);

exports.UserPoints = class UserPoints {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.UserPoints.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.UserPoints.prototype, "userId", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.UserPoints.prototype, "points", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar' }),
    tslib.__metadata("design:type", String)
], exports.UserPoints.prototype, "reason", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'boolean' }),
    tslib.__metadata("design:type", Boolean)
], exports.UserPoints.prototype, "isAdd", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'timestamp' }),
    tslib.__metadata("design:type", Date)
], exports.UserPoints.prototype, "endDate", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.UserPoints.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.UserPoints.prototype, "updatedAt", void 0);
exports.UserPoints = tslib.__decorate([
    typeorm.Entity('user_points')
], exports.UserPoints);

exports.UserTransactionRecord = class UserTransactionRecord {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.UserTransactionRecord.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.User, { nullable: false, onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.User)
], exports.UserTransactionRecord.prototype, "user", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Admin, { nullable: false, onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.Admin)
], exports.UserTransactionRecord.prototype, "admin", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.UserTransactionRecord.prototype, "type", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.UserTransactionRecord.prototype, "amount", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.UserTransactionRecord.prototype, "balanceBefore", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'int' }),
    tslib.__metadata("design:type", Number)
], exports.UserTransactionRecord.prototype, "balanceAfter", void 0);
tslib.__decorate([
    typeorm.Column('text'),
    tslib.__metadata("design:type", String)
], exports.UserTransactionRecord.prototype, "explanation", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.UserTransactionRecord.prototype, "createdAt", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.UserTransactionRecord.prototype, "updatedAt", void 0);
exports.UserTransactionRecord = tslib.__decorate([
    typeorm.Entity('user_transaction_records')
], exports.UserTransactionRecord);

exports.WorkingHour = class WorkingHour {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.WorkingHour.prototype, "id", void 0);
tslib.__decorate([
    typeorm.ManyToOne(() => exports.Doctor, (doctor) => doctor.id, { onDelete: 'CASCADE' }),
    tslib.__metadata("design:type", exports.Doctor)
], exports.WorkingHour.prototype, "doctor", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar' }),
    tslib.__metadata("design:type", String)
], exports.WorkingHour.prototype, "start", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar' }),
    tslib.__metadata("design:type", String)
], exports.WorkingHour.prototype, "end", void 0);
tslib.__decorate([
    typeorm.Column({ type: 'varchar' }),
    tslib.__metadata("design:type", String)
], exports.WorkingHour.prototype, "day_time", void 0);
tslib.__decorate([
    typeorm.CreateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.WorkingHour.prototype, "created_at", void 0);
tslib.__decorate([
    typeorm.UpdateDateColumn(),
    tslib.__metadata("design:type", Date)
], exports.WorkingHour.prototype, "updated_at", void 0);
exports.WorkingHour = tslib.__decorate([
    typeorm.Entity('working_hours')
], exports.WorkingHour);
//# sourceMappingURL=index.js.map
