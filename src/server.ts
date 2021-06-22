import express from "express";
import "reflect-metadata";
import "./database";


//@types/express
const app = express();

/**
 * GET     => Buscar uma informação
 * POST    => Inserir (Criar) uma informação
 * PUT     => Alterar uma informação
 * DELETE  => Remover um dado
 * PATCH   => Alterar uma informação específica
 */

/**
 * Tipos de parâmetros
 * Routes Params => http://localhost:3000/produtos/55682312
 * Query Params => http://localhost:3000/produtos?name=teclado&description=razer
 */

app.get("/test", (request, response) => {

    return response.send("Resposta rota TEST")

})

app.post("/testPost", (resquest, response) => {

    return response.send("Teste Post")
})


//http://localhost:3000
app.listen(3000, () => console.log("Server is Running"));