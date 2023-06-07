import mongoose from 'mongoose'

export default function connectDB()
{
    mongoose.set('strictQuery', false)
    mongoose.connect('mongodb://0.0.0.0:27017/IPTP09',{})
    .then((res) => {
        console.log("Conected to mongodb")
    })
    .catch(e=>{console.log(e)})
}