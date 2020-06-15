//配置用户模型
import mongoose from 'mongoose'
//定义模式(相当于类型)
const Schema = mongoose.Schema
const UserSchema=new Schema({
  username:{
    type:String,
    unique:true,
    require:true
  },
  password:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true
  }
})
//导出模型(相当于变量)
export default mongoose.model('User',UserSchema)