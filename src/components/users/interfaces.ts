interface INewUser { 
    username: string;
    email: string;
    password: string;
    role: 'Admin' | 'User';
}

interface IUser extends INewUser {
    id: number;
}

export { INewUser, IUser };