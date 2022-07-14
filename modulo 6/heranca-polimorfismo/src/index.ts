import { application, Request, Response } from "express";
import { request } from "http";
import { app } from "./app";
import { User } from "./data/Character";
import { Client } from "./data/client";
import { Place } from "./data/place";

//import { CharacterDataBase } from "./data/CharacterDataBase";

//const user = new User("1", "jao@gmail.com", "João Pedro", "123456");


app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
}
);

app.post("/users", (req: Request, res: Response) => {
    try {
        const user = new User(req.body.id, req.body.email, req.body.name, req.body.password);
        res.send(user);
    } catch (error) {
        res.status(400).send({
            message: error,
            sqlMessage: error,
        });
    }
}
);

//ele chama o construtor uma vez, mas náo mostra o password nenhuma vez.


class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

const customer = new Customer("1", "jao@email.com", "Joan", "21908", "123456789");

app.post("/customers", (req: Request, res: Response) => {
    try {
        const customer = new Customer(req.body.id, req.body.email, req.body.name, req.body.password, req.body.creditCard);
        customer.introduceYourself();
        res.send(customer.introduceYourself);
    } catch (error) {
        res.status(400).send({
        message: error,
        sqlMessage: error,
        });
    }
    }
);

// A mensagem de chamando construtor da classe customer aparece uma vez no terminal, a mensagem de chamando construtor da classe User também aparece uma vez no terminal, esta ultima aparece por que a classe Customer herda da classe User.


app.get ("/customers", (req, res) => {
    res.send(customer);
}
);

// Sim pois esta instancia tem um get password e assim a senha se torna publica.

const clients: Client = {
  name: "Goli",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: () => {
    return 2;
  }
}
const clients2: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: () => {
        return 2;
    }
}

app.get("/clients", (req, res) => {
    res.send(clients);
}
);

// A propriedade CalculateBill é privada, então não é possível acessá-la fora da classe.

// const newPlaces: Place = {
//     cep: "12345-678",

//     getCep: () => {
//         return this.cep;
//     }
// }
//Typescript não permite acessar a propriedade cep fora da classe.
//Para acessar devemos deixar a propriedade cep como publica e chamar pelo metodo getCep.

// Place é uma interface porque não tem nenhum metodo.
// Place é abstrata porque não tem nenhum metodo, então não é possível instanciar.

export class Residence extends Place {
  constructor(
    private dwellersQuantity: number,

    cep: string
  ) {
    super(cep);
  }
  
  public getDwellersQuantity(): number {
    return this.dwellersQuantity
  }
}

export class Commerce extends Place {
  constructor(
    private floorsQuantity: number,
    // Refere-se à quantidade de andares do lugar

    cep: string
  ) {
    super(cep);
  }

  public getFloorsQuantity(): number {
    return this.floorsQuantity;
  }
}

export class Industry extends Place {
  constructor(
    private machinesQuantity: number,
    // Refere-se à quantidade de máquinas do local

    cep: string
  ) {
    super(cep);
  }

  public getMachinesQuantity(): number {
    return this.machinesQuantity;
  }
}

class ResidentialClient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string
  ) {
    super(residentsQuantity, cep);
  }

  public getCpf(): string {
    return this.cpf;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }
}

class CommercialClient extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep);
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }

  public getCnpj(): string {
    return this.cnpj;
  }
}

// as semelhanças entre as classes CommercialClient e IndustrialClient são: name, registrationNumber, consumedEnergy, cep, floorsQuantity.
// as diferenças entre as classes CommercialClient e IndustrialClient são: cnpj, machinesQuantity.


// class IndustrialClient extends Industry implements Client {
//   constructor(
//     public name: string,
//     public registrationNumber: number,
//     public consumedEnergy: number,
//     private insdustryNumber: string,
//     machinesQuantity: number,
//     cep: string
//   ) {
//     super(machinesQuantity, cep);
//   }

//   public getIndustryNumber(): string {
//     return this.insdustryNumber;
//   }

//   public calculateBill(): number {
//     return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
//   }
// }

// Deve ser filha da classe industry, pois ela herda de ela.
// Entretanto o problema é que a classe industrial não tem nenhum metodo, então não é possível instanciar.
// Não é possível criar apenas o getters da classe industrial, pois ela não tem nenhum metodo.
