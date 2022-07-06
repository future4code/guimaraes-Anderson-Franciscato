import { Request, Response } from "express"
import { Raw } from "knex"
import { connection } from "../data/connection"


export default async function selectAllUsers():Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio;
   `)

   return result[0]
}

//users by name

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      let name = req.query.name as string

      if (!name) {
         name = '%'
      }

      const users = await connection('aula48_exercicio')
         .where('name', 'like', `%${name}%`)

      if (users.length === 0) {
         res.status(404).send({ message: 'Users name not found' })
      }
   } catch (error) {
      res.status(500).send({ message: error })
   }
}

//Get user by types
export const getUsersByType = async(req: Request,res: Response): Promise<void> =>{
   try {
      let type = req.params.type 

      if (!type) {
         type = '%'
      }

      const users = await connection('aula48_exercicio')
         .where('type', '=', `%${type}%`)

      if (users.length === 0) {
         res.status(404).send({ message: 'Users type not found' })
      }
   } catch (error) {
      res.status(500).send({ message: error })
   }
}

//Get users ordered 
export const getUsersOrdered = async(req: Request,res: Response): Promise<void> =>{
   try {
      let order = req.query.order as string
      let sort = req.query.sort as string

      if (!sort) {
         sort = 'email'
      }

      if (order?.toUpperCase() === 'ASC' || order?.toUpperCase() === 'DESC') {
         order = order.toUpperCase()
      }

      const users = await connection('aula48_exercicio')
      .orderBy(sort, order)
      .select();

      if (users.length === 0) {
         res.status(404).send({ message: 'Users not found' })
      }
   } catch (error) {
      res.status(500).send({ message: error })
   }
}

//Users page
export const getUsersPage = async(req: Request,res: Response): Promise<void> =>{
   try {
      let page = Number(req.query.page) 
      let limit = Number(req.query.limit)

      if (!page) {
         page = 1
      }

      if (!limit) {
         limit = 10
      }

      const users = await connection('aula48_exercicio')
      .limit(limit)
      .offset((page - 1) * limit)
      .select();

      if (users.length === 0) {
         res.status(404).send({ message: 'Users not found' })
      }
   } catch (error) {
      res.status(500).send({ message: error })
   }
}