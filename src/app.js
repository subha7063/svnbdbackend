import e from "express";

const app = e();

app.get("/", (_, res)=>{
    res.send("Hello World");
})

export {app}