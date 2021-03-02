import { Action } from "redux";
import { IAccountInfo } from "../types";

export enum TypeActionAccount {
    SetActive = "Account > Set > Active",
    New = "Account > Add > New"
}

export interface IActionAccount extends Action {
    type: TypeActionAccount,
    accountId?: string,
    account?: IAccountInfo,
}

export const acAccountSetActive = (accountId: string): IActionAccount => ({
    type: TypeActionAccount.SetActive,
    accountId
})

export const acAccountAddNew = (account: IAccountInfo): IActionAccount => ({
    type: TypeActionAccount.New,
    account
})