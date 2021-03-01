export interface ISplitInfo {
    id: string;
    amount: number;
    title: string;
    color: string;
    icon?: string;
    percentage?: number;
}

export interface IAccountInfo {
    id: string;
    totalAmount: number;
    title: string;
    splits: ISplitInfo[];
}
