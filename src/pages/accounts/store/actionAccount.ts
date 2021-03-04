import { Action } from "redux";
import { IAccountInfo, ISplitInfo } from "../types";

export enum TypeActionAccount {
    SetActive = "Account > Set > Active",
    New = "Account > Add > New",
    UpdateSplit = "Account > Split > Update"
}

export interface IActionAccount extends Action {
    type: TypeActionAccount,
    accountId?: string,
    splits?: ISplitInfo[],
    account?: IAccountInfo,
}

export const acAccountSetActive = (accountId: string): IActionAccount => ({
    type: TypeActionAccount.SetActive,
    accountId
});

export const acAccountAddNew = (account: IAccountInfo): IActionAccount => ({
    type: TypeActionAccount.New,
    account
});

export const acAccountSplitUpdate = (accountId: string, splits: ISplitInfo[]): IActionAccount => ({
    type: TypeActionAccount.UpdateSplit,
    accountId,
    splits
});