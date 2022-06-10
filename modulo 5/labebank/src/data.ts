import moment from "moment";

export type movements = {
    value: number, 
    date: string,
    description: string, 
};

export type users = {
    id: number,
    name: string, 
    cpf: number, 
    birth: string,
    accountBalance: number,
    statement: movements[],
};

export let newUser: users = {
    id: 0, 
    name: "", 
    cpf: 0, 
    birth: "",
    accountBalance: 0,
    statement: [],
};

export let Accounts: users[] = [
    {
        id : 1,
        name : "Marcos",
        cpf : 12345678901,
        birth : "22/09/2000",
        accountBalance : 0,
        statement: [{
            value : -1,
            date : "01/02/2009",
            description : "Pagamento de conta",
        }
    ]
    }
];