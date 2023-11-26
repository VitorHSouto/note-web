export interface User {
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
    active?: boolean,
    token?: string,
    profile?: RoleEnum,
    name?: string,
    email?: string
} 

export enum RoleEnum {
    UNDEFINED,
    ADMIN,
    USER
}