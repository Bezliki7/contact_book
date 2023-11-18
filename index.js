import express from "express"
import contactRouter from "./routes/contact.routes.js"
import cors from "cors"

const PORT = process.env.PORT || 3333

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', contactRouter)

app.listen(PORT, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('serv ok')
})
