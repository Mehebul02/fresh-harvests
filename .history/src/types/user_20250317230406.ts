export interface IUser {
    userId: string,
    fullName: string,
    userName: string,
    email: string,
    profileImage:
    hasShop?: boolean,
    inActive?: boolean,
    role: 'user' | 'admin',
    iat?: number,
    exp?: number

}