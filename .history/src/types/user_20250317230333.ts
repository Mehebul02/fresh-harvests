export interface IUser {
    userId: string,
    fullName: string,
    email: string,
    hasShop?: boolean,
    inActive?: boolean,
    role: 'user' | 'admin',
    iat?: number,
    exp?: number

}