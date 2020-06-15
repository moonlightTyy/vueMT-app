//配置文件
export default {
  //设置数据库的地址：协议+本机IP地址+端口号+数据库名
  dbs: 'mongodb://127.0.0.1:27017/student',
  //redis的配置
  redis: {
    get host() {
      //当前主机
      return '127.0.0.1'
    },
    get port() {
      //默认的端口号
      return 6379
    }
  },
  smtp: {
    get host() {
      //访问主机
      return 'smtp.qq.com'
    },
    get user() {
      //用户账号
      return '1064159098@qq.com'
    },
    get pass() {
      //授权码(要保密)
      return 'kccwxygjyuasbdfj'
    },
    get code() {
      //获取验证码
      return () => {
        return Math.random().toString(16).slice(2, 6).toUpperCase()
      }
    },
    get expire() {
      //返回过期时间1分钟，思考为什么要返回函数而不是直接返回常数？
      return () => {
        return new Date().getTime() + 60 * 1000
      }
    }
  }
}
