import express from "express";

//@types/express
const app = express();

app.get("/test", (request, response) => {

    return response.send("Resposta rota TEST")

})

app.post("/testPost", (resquest, response) => {

    return response.send("Teste Post")
})



//http://localhost:3000
app.listen(3000, () => console.log("Server is Running"));