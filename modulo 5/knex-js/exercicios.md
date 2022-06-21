## Exercício 1 
a) Ao usar Raw a resposta vem em uma grande string, como se fosse um arquivo.

b) const sercherActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = '${name}'
    `)
    
        return result[0][0]
    }

c) const countActorsByGender = async (gender : string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE gender = '${gender}'
    `);
    const count = result[0][0].count;
    return count;
};

## Exercicio 2 
a) app.patch("/users/update", async (req: Request, res: Response) => {
    const updateActor = async (id: string, salary: number) => {
        await connection("Actor")
        .update({
            salary: salary,
        })
        .where({"id": id})
    };
    try {
        const id = req.body.id;
        const salary = req.body.salary;
        await updateActor(id, salary);
        res.end();
    }
    catch (error) {
        console.log(error);
    }
}
);

b) app.delete("/users/delete", async (req: Request, res: Response) => {
    try {
        const id = req.body.id;
        await connection("Actor").where({"id": id}).del();
        res.end();
    }
    catch (error) {
        console.log(error);
    }
}
);

c) app.get("/users/avgsalary", async (req: Request, res: Response) => {
    try {
        const avgsalary = async (gender : string) => {
            const result = await connection ("Actor")
            .avg("Salary as average")
            .where({gender});

            return result[0].avarage;
        }
    }
    catch (error) {
        console.log(error);
    }
});

## Exercicio 3
a) app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err) {
    res.status(400).send({
      message: err,
    });
  }
});

b) app.get("/users/:gender", async (req: Request, res: Response) => {
    try {
const countActorsByGender = async (gender : string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE gender = '${gender}'
    `);
    const count = result[0][0].count;
    return count;
}
    }
catch (error) {
    console.log(error);
}});

## Exercicio 4

a) app.put("/users/update", async (req: Request, res: Response) => {
    const updateActor = async (id: string, salary: number) => {
        await connection("Actor")
        .update({
            salary: salary,
        })
        .where({"id": id})
    };
    try {
        const id = req.body.id;
        const salary = req.body.salary;
        await updateActor(id, salary);
        res.end();
    }
    catch (error) {
        console.log(error);
    }
}
);

b) app.delete("/users/delete", async (req: Request, res: Response) => {
    try {
        const id = req.body.id;
        await connection("Actor").where({"id": id}).del();
        res.end();
    }
    catch (error) {
        console.log(error);
    }
}
);
