import express from "express";
const app = express();
const port = 3000;
// const __dirname = dirname(fileURLToPath(import.meta.url));
// app.use(bodyParser.urlencoded({ extended: true }));



// app.get("/",(req,res)=>{
//   const d = new Date();
// const day = d.getDay();

//   if(day===0 || day===6){
//     res.render("index.ejs",{dayType:"Weekend",
//   advice: "work baby work"})
//   }
//   else{
//     res.render("index.ejs",{dayType:"Weekday",
//   advice: "work baby work"})
//   }
// })


app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",
  };
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
