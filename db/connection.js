import mongoose from "mongoose";

mongoose.connect(
    "mongodb+srv://JonLowe:Team-Baeju@1-cluster.w46yh.mongodb.net/?retryWrites=true&w=majority&appName=1-Cluster"
  )
  .then(()=>{
    console.log("connected")
  })
  .catch(()=>{
    console.log("error")
  })

const testSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    }
})

const collection= new mongoose.model('test', testSchema)

const data= [{
    name: "Jon"
},
{
    name: "Bogdan"
},
{
    name: "Umar"
},
{
    name: "Agatha"
}
]

collection.insertMany(data)

console.log(await collection.findOne({}))