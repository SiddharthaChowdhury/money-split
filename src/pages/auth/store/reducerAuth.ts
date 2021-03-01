import { IActionAuth, TypeActionAuth } from "./actionAuth"

export interface IStateAuth {
    isLive: boolean;
}

const initial: IStateAuth = {
    isLive: false
}

const reducerAuth = (state: IStateAuth = initial, action: IActionAuth): IStateAuth => {
    switch(action.type) {
        case TypeActionAuth.SetAuth: 
            return {
                ...state
            };
        default:
            return state;
    }
}

export default reducerAuth;