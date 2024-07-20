import {makeAutoObservable} from "mobx";

export default class UserStore {
    private _isAuth: boolean = false
    private _user: any = {}
    
    constructor() {
        makeAutoObservable(this)    }

    setIsAuth(bool: boolean) {
        this._isAuth = bool
    }
    setUser(user: any) {
        this._user = user
    }

    get isAuth(): boolean {
        return this._isAuth
    }
    get user(): any {
        return this._user
    }
}    