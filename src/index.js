import { app } from "./app.js";
import { configDotenv } from "dotenv";

configDotenv();

const PORT = process.env.PORT || 3321;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
})