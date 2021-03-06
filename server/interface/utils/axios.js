import axios from 'axios'
//创建一个axios实例
const instance = axios.create({
    //获取环境变量的主机与端口，若没有设置就获取本机
  baseURL:`http://${process.env.HOST||'localhost'}:${process.env.PORT||3000}`,
  timeout:2000,
  headers:{
  }
})

export default instance