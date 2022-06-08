import express from "express";
import { AddressInfo } from "net";
import { getSyntheticLeadingComments } from "typescript";
import { stringify } from "uuid";
import { products } from "./data";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

app.get("/test", (req, res) => {
    res.send("Hello world!");
    }
);

type Product = {
    id: number;
    name: string;
    price: number;
}

// Create a new product

const createProduct = (product: Product) => {
    products.push(product);
    return product;
}

app.post("/api/products", (req, res) => {
   const name = req.body.name;
   const price = req.body.price;

   products.push({
         id: products.length + 1,
            name: name,
            price: price
    });
    res.status(201).send(products);
}
);

// Get all products

app.get("/api/products", (req, res) => {
    res.send(products);
}
);

// Edit a price of a product

type UpdateProduct = {
    id: number;
    name: string;
    price: number;
}

const updateProduct = (id: number, updateProduct: UpdateProduct) => {
    const product = products.find(product => product.id === id);
    if (!product) {
        return;
    }
    product.name = updateProduct.name || product.name;
    product.price = updateProduct.price || product.price;
}

app.put("/api/products/:id", (req, res) => {
    const id = req.params.id || Number();
    const updateProduct = req.body as UpdateProduct;
    (Number(id), updateProduct);
    res.status(200).send({
        message: "Product updated successfully",
        product: {
            id: id,
            name: updateProduct.name,
            price: updateProduct.price
            }
}
);
}
);


const deleteProduct = (id: number) => {
    const product = products.find(p => p.id === id);
    if (!product) {
        return null;
    }
    const index = products.indexOf(product);
    products.splice(index, 1);
    return product;
}

app.delete("/api/products/:id", (req, res) => {
    const id = req.params.id;
    const product = deleteProduct(Number(id));
    if (!product) {
        res.status(404).send({
            message: "Product not found"
        });
    }
    res.status(200).send({
        message: "Product deleted successfully",
        product: product
    });
}
);




