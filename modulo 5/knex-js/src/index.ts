import { Request, Response } from "express";
import knex from "knex";
import connection from "./connection";
import app from "./app";
import { Express } from "express";

// // Esse arquivo seria o index.ts

// const getActorById = async (id: string): Promise<any> => {
//   const result = await connection.raw(`
//     SELECT * FROM Actor WHERE id = '${id}'
//   `)

// 	return result[0][0]
// }


// // Assim a chamada funciona fora dos endpoints com .then()/.catch
// getActorById("001")
// 	.then(result => {
// 		console.log(result)
// 	})
// 	.catch(err => {
// 		console.log(err)
// 	});

// // Assim a chamada funciona fora dos endpoints com await
// (async () => {
//   console.log(await getActorById("001") )
// })()


// // Ou então podemos chamá-la dentro de um endpoint
// app.get("/users/:id", async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id

//     console.log(await getActorById(id))

//     res.end()
//   } catch (error) {
// 		console.log("error", error)
//     res.status(500).send("Unexpected error")
//   }
// });

// // bata no http://localhost:3003/users/001 e veja o que acontece no termina

// app.get("/users/:name", async (req: Request, res: Response) => {
//     try {
//         const sercherActorByName = async (name: string): Promise<any> => {
//     const result = await connection.raw(`
//         SELECT * FROM Actor WHERE name = '${name}'
//     `)
    
//         return result[0][0]
//     }
// }
// catch (error) {
//     console.log("error", error)
//     res.status(500).send("Unexpected error")
// }});

// app.get("/users/:gender", async (req: Request, res: Response) => {
//     try {
// const countActorsByGender = async (gender : string): Promise<any> => {
//     const result = await connection.raw(`
//     SELECT * FROM Actor WHERE gender = '${gender}'
//     `);
//     const count = result[0][0].count;
//     return count;
// }
//     }
// catch (error) {
//     console.log(error);
// }});

// app.post("/users/:create", async (req: Request, res: Response) => {
//     try {
// const createActor = async (
//   id: string,
//   name: string,
//   salary: number,
//   dateOfBirth: Date,
//   gender: string
// ): Promise<void> => {
//   await connection
//     .insert({
//       id: id,
//       name: name,
//       salary: salary,
//       birth_date: dateOfBirth,
//       gender: gender,
//     })
//     .into("Actor");
// }}
// catch (err) {
//     console.log(err);
// }});

// app.put("/users/update", async (req: Request, res: Response) => {
//     const updateActor = async (id: string, salary: number) => {
//         await connection("Actor")
//         .update({
//             salary: salary,
//         })
//         .where({"id": id})
//     };
//     try {
//         const id = req.body.id;
//         const salary = req.body.salary;
//         await updateActor(id, salary);
//         res.end();
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// );

// app.delete("/users/delete", async (req: Request, res: Response) => {
//     try {
//         const id = req.body.id;
//         await connection("Actor").where({"id": id}).del();
//         res.end();
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// );

// app.get("/users/avgsalary", async (req: Request, res: Response) => {
//     try {
//         const avgsalary = async (gender : string) => {
//             const result = await connection ("Actor")
//             .avg("Salary as average")
//             .where({gender});

//             return result[0].avarage;
//         }
//     }
//     catch (error) {
//         console.log(error);
//     }
// });

// app.get("/actor/:id", async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id;
//     const actor = await getActorById(id);

//     res.status(200).send(actor)
//   } catch (err) {
//     res.status(400).send({
//       message: err,
//     });
//   }
// });

// const createActor = async (
//   id: string,
//   name: string,
//   salary: number,
//   dateOfBirth: Date,
//   gender: string
// ): Promise<void> => {
//   await connection
//     .insert({
//       id: id,
//       name: name,
//       salary: salary,
//       birth_date: dateOfBirth,
//       gender: gender,
//     })
//     .into("Actor");
// }

// app.post("/actor", async (req: Request, res: Response) => {
//   try {
//     await createActor(
//       req.body.id,
//       req.body.name,
//       req.body.salary,
//       new Date(req.body.dateOfBirth),
//       req.body.salary
//     );

//     res.status(200).send();
//   } catch (err) {
//     res.status(400).send({
//       message: err,
//     });
//   }
// });


app.put("/users/update", async (req: Request, res: Response) => {  
  try {
        const id = req.body.id;
        const salary = req.body.salary;
        await updateActor(id, salary);
          res.send("atualizado");
    }
    catch (error) {
        console.log(error);
    }
}
);

const updateActor = async (id: string, salary: number) => {
        await connection("Actor")
        .update({
            salary: salary,
        })
        .where("id", id)
};
