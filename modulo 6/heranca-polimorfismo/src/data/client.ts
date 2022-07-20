import knex from "knex";
import dotenv from "dotenv";
import { User } from "./Character";
import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../error/CustomError";

dotenv.config();

export interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
	// como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor da conta em reais
}
