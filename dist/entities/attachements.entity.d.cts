import { BaseEntity } from './baseEntity.entity.cjs';

declare class Attachement extends BaseEntity {
    bucketName: string;
    fileName: string;
    memeType: string;
    size: string;
}

export { Attachement };
