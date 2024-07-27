import express from "express";
const app = express();
const port = 3000;
app.get("/",(req,res)=>{
  res.send("<h1>NAmaste</h1>");
})
app.get("/about",(req,res)=>{
  res.send("<h1>Yep guy</h1>");
})
app.get("/contact",(req,res)=>{
  res.send("<h1>56565656</h1>");
})
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
