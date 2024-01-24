const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/user");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/createuser", async (req, resp) => {
  const t = await User.create(req.body);
  resp.json(t);
});



app.get("/", async (req, resp) => {
  const dta = await User.find({});
  resp.json(dta);
});



app.get("/getuser/:id", (req, resp) => {
  const id = req.params.id;
  User.findOne({ _id: id })
    .then((user) => resp.json(user))
    .catch((err) => console.log(err));
});



app.put("/updateuser/:id", (req, resp) => {
  const id = req.params.id;
  User.findByIdAndUpdate(
    { _id: id },
    {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      age: req.body.age,
    }
  )
    .then((user) => resp.json(user))
    .catch((err) => resp.json(err));
});




app.delete('/deleteuser/:id',(req,resp)=>{
  const id=req.params.id;
  User.findByIdAndDelete({_id:id})
  .then(user=>resp.json(user))
  .catch(err=>resp.json(err))
})



app.listen(5001, (err) => {
  console.log("Server Started");
});
