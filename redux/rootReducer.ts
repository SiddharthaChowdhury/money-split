import { combineReducers } from "redux";
import reducerAccount from "../src/pages/accounts/store/reducerAccount";
import reducerAuth from "../src/pages/auth/store/reducerAuth";
import { IState } from "./IState";

const rootReducer = combineReducers<IState>({
    auth: reducerAuth,
    account: reducerAccount
});
  
export default rootReducer;
  