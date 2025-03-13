import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('service_providers')
export class ServiceProvider {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    countryId: number;

    @Column('int', { nullable: true })
    cityId: number;

    @Column('varchar')
    uniqueId: string;

    @Column('varchar', { unique: true })
    specialCode: string;

    @Column('varchar')
    name: string;

    @Column('varchar', { nullable: true })
    nameAr: string;

    @Column('varchar', { nullable: true })
    nameEn: string;

    @Column('varchar', { nullable: true })
    nameTr: string;

    @Column('varchar', { unique: true })
    email: string;

    @Column('timestamp', { nullable: true })
    emailVerifiedAt: Date;

    @Column('varchar', { unique: true })
    phone: string;

    @Column('timestamp', { nullable: true })
    phoneVerifiedAt: Date;

    @Column('int', { default: 0 })
    balance: number;

    @Column('varchar', { nullable: true })
    password: string;

    @Column('varchar', { nullable: true, default: 'https://sehapracto-images.s3.us-east-2.amazonaws.com/newavatar.png' })
    profileImg: string;

    @Column('varchar', { nullable: true })
    address: string;

    @Column('varchar', { nullable: true })
    addressAr: string;

    @Column('varchar', { nullable: true })
    addressEn: string;

    @Column('varchar', { nullable: true })
    addressTr: string;

    @Column('double', { nullable: true })
    longitude: number;

    @Column('double', { nullable: true })
    latitude: number;

    @Column('text', { nullable: true })
    bio: string;

    @Column('text', { nullable: true })
    bioAr: string;

    @Column('text', { nullable: true })
    bioEn: string;

    @Column('text', { nullable: true })
    bioTr: string;

    @Column('varchar', { nullable: true })
    facebookLink: string;

    @Column('varchar', { nullable: true })
    instagramLink: string;

    @Column('varchar', { nullable: true })
    twitterLink: string;

    @Column('varchar', { nullable: true })
    linkedinLink: string;

    @Column('varchar', { nullable: true })
    youtubeLink: string;

    @Column('int', { default: 0 })
    rating: number;

    @Column('int', { default: 0 })
    numberRatings: number;

    @Column('boolean', { default: false })
    isActive: boolean;

    @Column('varchar', { nullable: true })
    fcmToken: string;

    @Column('boolean', { default: false, nullable: true })
    isToDelete: boolean;

    @Column('timestamp', { nullable: true })
    deleteDate: Date;

    @Column('boolean', { default: false })
    isDeleted: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
