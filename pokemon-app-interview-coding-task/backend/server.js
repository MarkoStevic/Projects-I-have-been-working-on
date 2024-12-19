const express = require("express")
const app = express()
const cors = require("cors")

const corsOptions = {
    origin: "http://localhost:5173",
}

app.use(express.json())
app.use(cors(corsOptions))
const PORT = 8080


const catchListArray = []

app.post("/api/catchList", (req, res) => {
    const newPoke = req.body;

    const alreadyOnList = catchListArray.some(pokemon => pokemon.name === newPoke.name)

    if (alreadyOnList) {
        res.json({
            message: "Pokemon is already on the list. Pick another pokemon!"
        })
    } else {
        catchListArray.push(newPoke)
        res.status(200).json({
            message: 'Data received successfully'
        });
    }
})

app.get("/api/catchList", (req, res) => {
    res.status(200).json(catchListArray)
})

app.listen(PORT, () => {
    console.log("Server has started on port: " + PORT);

})