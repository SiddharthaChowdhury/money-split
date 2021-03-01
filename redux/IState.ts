import { IStateAccount } from "../src/pages/accounts/store/reducerAccount";
import { IStateAuth } from "../src/pages/auth/store/reducerAuth";

export interface IState {
    auth: IStateAuth;
    account: IStateAccount;
}