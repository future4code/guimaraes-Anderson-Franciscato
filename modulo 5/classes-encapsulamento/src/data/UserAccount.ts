import Transaction from './Transaction';

export class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transaction: Transaction[] = [];

  constructor(
     cpf: string,
     name: string,
     age: number,
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }
    getCpf(): string {
        return this.cpf;
    }
    getName(): string {
        return this.name;
    }
    getAge(): number {
        return this.age;
    }
    getBalance(): number {
        return this.balance;
    }
    getTransaction(): Transaction[] {
        return this.transaction;
    }
}

// O construtor serve para instanciar objetos da classe na qual esse construtor está definido.
// Para chamar usamos a palavra-chave this.

export default UserAccount;

