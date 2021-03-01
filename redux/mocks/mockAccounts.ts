import { IStateAccount } from "../../src/pages/accounts/store/reducerAccount";
import { mockSplits } from "./mockSplits";

export const mockAccounts: IStateAccount = {
    activeId: '11',
    list: [
        {
            id: "11",
            totalAmount: 100,
            title: "Default",
            splits: [
                ...mockSplits
            ]
        },
        {
            id: "12",
            totalAmount: 0,
            title: "Dummy",
            splits: []
        }
    ]
}