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
                ...state
            };
        default:
            return state;
    }
}

export default reducerAccount;