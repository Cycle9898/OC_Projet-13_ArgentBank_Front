/* Mocked data for account overviews on Profile Page */

type Account = {
    id: number,
    accountTitle: string,
    amount: number,
    amountDescription: string
}

export const userAccounts: Account[] = [
    {
        id: 1,
        accountTitle: "Argent Bank Checking (x8349)",
        amount: 2082.79,
        amountDescription: "Available Balance"
    },
    {
        id: 2,
        accountTitle: "Argent Bank Savings (x6712)",
        amount: 10928.42,
        amountDescription: "Available Balance"
    },
    {
        id: 3,
        accountTitle: "Argent Bank Credit Card (x8349)",
        amount: 184.30,
        amountDescription: "Current Balance"
    }
];