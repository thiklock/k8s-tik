import express from 'express' // Corrected import
import os from 'os'

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    const helloMessage = `Hello from Big Chic and from the ${os.hostname()}`
    console.log(helloMessage)
    res.send(helloMessage)
})

app.listen(PORT, () => { // Corrected app.listen()
    console.log(`Web server is listening at port ${PORT}`)
})
