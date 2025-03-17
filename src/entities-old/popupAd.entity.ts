import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('popup_ads')
export class PopupAd {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    countryId: number;

    @Column()
    img: string;

    @Column({ nullable: true })
    action: string;

    @Column({ nullable: true })
    actionId: string;

    @Column({ nullable: true })
    actionUrl: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
