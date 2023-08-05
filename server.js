import express from "express";

const app = express();
const PORT = 3000;

app.use(express.static("./"));

app.listen(PORT, () => {
    console.log(`Listeting on port ${PORT}`);
})