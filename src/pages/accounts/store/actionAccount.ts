import { Action } from "redux";

export enum TypeActionAccount {
    SetActive = "Account > Set > Active"
}

export interface IActionAccount extends Action {
    type: TypeActionAccount
}
