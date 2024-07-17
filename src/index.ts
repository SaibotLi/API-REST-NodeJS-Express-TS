import express from "express"
const app = express()
app.use(express.json()) // Middleware que transforma la req.body a un json

const PORT = 3000

app.get("/ping", (_req, res) => {
    console.log("Someone pinged here!!")
    res.send("pong")
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})