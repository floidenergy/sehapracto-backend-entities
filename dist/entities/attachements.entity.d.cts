import { BaseEntity } from './baseEntity.entity.cjs';

declare class Attachement extends BaseEntity {
    bucket_name: string;
    file_name: string;
    meme_type: string;
    size: string;
}

export { Attachement };
