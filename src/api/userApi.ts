import { User, Token } from 'models/user';
import axiosClient from './axiosClient';

const userApi = {
    createUser(user: User): Promise<Token> {
        const url = '/users/register';
        return axiosClient.post(url);
    },
};

export default userApi;
