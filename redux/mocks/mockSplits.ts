import { ISplitInfo } from "../../src/pages/accounts/types";

export const mockSplits: ISplitInfo[] = [
    {
        id: '1',
        title: 'Savings',
        color: 'red',
        amount: 30,
        percentage: 30,   
    },
    {
        id: '2',
        title: 'Property buy',
        color: 'green',
        amount: 40,
        percentage:40
    },
    {
        id: '3',
        title: 'Emergency',
        color: 'cyan',
        amount: 20,
        percentage: 10
    },
    {
        id: '4',
        title: 'Entertainments',
        color: 'orange',
        amount: 10,
        percentage:10
    }
]