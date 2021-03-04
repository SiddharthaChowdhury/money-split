import { IAccountInfo } from "../types";
import { IActionAccount, TypeActionAccount } from "./actionAccount"

export interface IStateAccount {
    activeId?: string;
    list: IAccountInfo[]
}

const initial: IStateAccount = {
    list: []
}

const reducerAccount = (state: IStateAccount = initial, action: IActionAccount): IStateAccount => {
    switch(action.type) {
        case TypeActionAccount.SetActive: 
            return {
                ...state,
                activeId: action.accountId
            };
        case TypeActionAccount.New:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.account!
                ]
            };
        case TypeActionAccount.UpdateSplit:
            return updateAccountSplits(state, action);
        default:
            return state;
    }
}

const updateAccountSplits = (state: IStateAccount = initial, action: IActionAccount): IStateAccount => {
    const updateAccountList = state.list.map((acct: IAccountInfo) => {
        if(acct.id === action.accountId) {
            return {
                ...acct,
                splits: [
                    ...action.splits!
                ]
            }
        }

        return acct;
    });

    return {
        ...state,
        list: updateAccountList.filter((acct: IAccountInfo | null) => !!acct)
    }
}

export default reducerAccount;