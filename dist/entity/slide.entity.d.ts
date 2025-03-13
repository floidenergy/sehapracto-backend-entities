import { Country } from './country.entity';
export declare class Slide {
    id: number;
    country: Country;
    name: string;
    name_ar: string;
    name_en: string;
    name_tr: string;
    description: string;
    description_ar: string;
    description_en: string;
    description_tr: string;
    contact: string;
    img: string;
    link: string;
    fb_link: string;
    ig_link: string;
    twitter_link: string;
    whatsapp_link: string;
    video_link: string;
    client_name: string;
    client_adress: string;
    duration: string;
    clicks: number;
    views: number;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
}
