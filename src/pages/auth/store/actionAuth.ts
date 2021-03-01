import { Action } from "redux";
import { RAction } from "../../../types/IReduxAction";


export enum TypeActionAuth {
    SetAuth = "Auth > Set"
}

export interface IActionAuth extends RAction {
    type: TypeActionAuth
}
