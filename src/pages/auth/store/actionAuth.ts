import { Action } from "redux";

export enum TypeActionAuth {
    SetAuth = "Auth > Set"
}

export interface IActionAuth extends Action {
    type: TypeActionAuth
}
