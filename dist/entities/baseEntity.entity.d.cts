declare class BaseEntity {
    id: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    deletedAt: Date;
}

export { BaseEntity };
