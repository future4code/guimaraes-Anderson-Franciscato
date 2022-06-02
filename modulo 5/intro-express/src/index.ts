import express, { request } from "express";
import cors from "cors"
import { Request, Response } from "express";
import { posts, users } from "./data";
import fetch from "node-fetch";
import { isConstructorDeclaration } from "typescript";

const app = express() 
app.use(express.json()) 
app.use(cors())
app.listen(3003, () => {
    console.log("Server is running on port 3003")
})

app.get('/', (req: Request, res: Response) => {
    res.status(200).send("Hello from express")
})

app.get('/users', (req: Request, res: Response) => {
    res.status(200).send(users.map(user => {
        return {
            id: user.id,
            name: user.name,
            phone: user.phone,
            email: user.email,
            website: user.website,
        }
    }))

})

app.get('/posts', (req: Request, res: Response) => {
    res.status(200).send(posts.map(post => {
        return {
            id: post.id,
            title: post.title,
            body: post.body,
            userId: post.userId
        }
    }))
}
)

app.get('/posts/:id', (req: Request, res: Response) => {
    const userId = req.params.id
    const post = posts.find(post =>
        post.id === Number(userId)
    )
    if (!post) {
        res.status(404).send("Post not found")
    } else {
        res.status(200).send(post)
    }
})

app.get ('/users/:id', (req: Request, res: Response) => {
    const userId = req.params.id
    const user = users.find(user =>
        user.id === Number(userId)
    )
    if (!user) {
        res.status(404).send("User not found")
    } else {
        res.status(200).send(user)
    }
})

app.delete('/posts/:id', (req: Request, res: Response) => {
    const postId = req.params.id
    const post = posts.find(post =>
        post.id === Number(postId)
    )
    if (!post) {
        res.status(404).send("Post not found")
    } else {
        posts.splice(posts.indexOf(post), 1)
        res.status(200).send("Post deleted")
    }
}
)

app.delete('/users/:id', (req: Request, res: Response) => {
    const userId = req.params.id
    const user = users.find(user =>
        user.id === Number(userId)
    )
    if (!user) {
        res.status(404).send("User not found")
    } else {
        users.splice(users.indexOf(user), 1)
        res.status(200).send("User deleted")
    }
}
)


