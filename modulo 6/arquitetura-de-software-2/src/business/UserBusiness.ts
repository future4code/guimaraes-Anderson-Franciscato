import { UserDatabase } from "../data/UserDatabase"
import { generateId } from "../services/generateId"
import { UserDTO } from "../model/userDTO"
export class UserBusiness {
  create(input: UserDTO) {
    throw new Error("Method not implemented.")
  }
  getAllUsers() {
    throw new Error("Method not implemented.")
  }
  public createUser = async ( input: UserDTO ): Promise<void> => {
    try {
      const { name, email, password } = input;
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const id = generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }
  catch (error:any) {
    throw new Error(error.message)
  }
}
}

