import { BaseEntity } from './entities/baseEntity.entity.cjs';

declare class Product extends BaseEntity {
    name: string;
    sku: string;
    category: Category;
    require_prescription: boolean;
    price: number;
    description: string;
}

declare class Category extends BaseEntity {
    name: string;
    products: Product[];
}

export { Category as C, Product as P };
