export interface IUser {
    userId: string,
    fullName: string,
    userName: string,
    email: string,
    profileImage:string,
    role: 'user' | 'admin',
    iat?: number,
    exp?: number

}