import { combineReducers } from "redux";
import reducerAuth from "../src/pages/auth/store/reducerAuth";
import { IState } from "./IState";

const rootReducer = combineReducers<IState>({
    auth: reducerAuth
});
  
export default rootReducer;
  