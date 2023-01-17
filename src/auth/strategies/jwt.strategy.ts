import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // 解析用户提交的header中的Bearer Token数据
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      // 选择默认false设置，将确保 JWT 未过期的责任委托给Passport模块
      // 这意味着如果我们的路由提供了过期的JWT，请求将被拒绝并401 Unauthorized发送响应
      // Passport可以方便地自动为我们处理这个问题
      // 加密码的secret
      secretOrKey: '' + process.env.TokenSecret
    })
  }

  // 对于 jwt-strategy，Passport 首先验证 JWT 的签名并解码 JSON
  // 然后它调用我们的validate()方法，将解码后的 JSON 作为其单个参数传递
  // 基于 JWT 签名的工作方式，我们可以保证我们收到的是我们之前签署并颁发给有效用户的有效令牌
  // 验证通过后获取用户资料
  async validate(payload: any) {
    return payload
  }
}
