import { BaseEntity } from './baseEntity.entity.js';

declare class Attachement extends BaseEntity {
    bucket_name: string;
    file_name: string;
    meme_type: string;
    size: string;
}

export { Attachement };
