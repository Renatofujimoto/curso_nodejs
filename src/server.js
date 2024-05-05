import http from "node:http"

const users = [];

const server = http.createServer((req, res) => {

    const { method, url } = req

    if (method === "GET" && url === "/users") {
        return res
            .setHeader("Content-type", "application/json")
            .end(JSON.stringify(users))
    }

    if (method === "POST" && url === "/users") {
        users.push({
            id: 1,
            name: "Renato",
            email: "renatofujimoto@gmai.com"
        })

        res.writeHead(201).end("Usuário Criado")
    }

    return res.writeHead(404).end("Rota não encontrada")
})

server.listen(4000)