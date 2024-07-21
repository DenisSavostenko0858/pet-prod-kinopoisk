import { makeAutoObservable } from "mobx";

export type UserType = {
    name: string;
    email: string;
    role: string;
    // Другие свойства пользователя, если они есть
}

export default class UserStore {
    private _isAuth: boolean = false;
    private _user: UserType | null = null; // Используем тип UserType

    constructor() {
        makeAutoObservable(this);
    }

    setIsAuth(bool: boolean) {
        this._isAuth = bool;
    }

    setUser(user: UserType | null) { // Используем тип UserType
        this._user = user;
    }

    get isAuth(): boolean {
        return this._isAuth;
    }

    get user(): UserType | null { // Используем тип UserType
        return this._user;
    }
}