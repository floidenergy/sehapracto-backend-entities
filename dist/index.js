'use strict';

var tslib = require('tslib');
var typeorm = require('typeorm');

exports.Admin = class Admin {
};
tslib.__decorate([
    typeorm.PrimaryGeneratedColumn(),
    tslib.__metadata("design:type", Number)
], exports.Admin.prototype, "id", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.Admin.prototype, "department_id", void 0);
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
    typeorm.Column({
        default: "https://s3.us-east-2.amazonaws.com/sehapracto-images/user_profile_images/Pc7bLYpjW2c56Jnb8ovCq3ZrA3rO8vPEL0j4ZsXH.jpg",
    }),
    tslib.__metadata("design:type", String)
], exports.Admin.prototype, "profile_img", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", String)
], exports.Admin.prototype, "phone", void 0);
tslib.__decorate([
    typeorm.Column(),
    tslib.__metadata("design:type", Number)
], exports.Admin.prototype, "country_id", void 0);
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
    typeorm.Entity("admins")
], exports.Admin);
//# sourceMappingURL=index.js.map
