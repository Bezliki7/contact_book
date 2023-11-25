import express from "express"
import contactRouter from "./routes/contact.routes"
import cors from "cors"
import pool from "./db"

const PORT = process.env.PORT || 3333

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', contactRouter)


pool.sync().then(() => {
    console.log('serv ok');
    app.listen(PORT);
});

