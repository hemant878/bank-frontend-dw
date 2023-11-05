import { IAccounts } from "./iaccounts";

export interface IUser {
    id?: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    account: IAccounts[];
}
