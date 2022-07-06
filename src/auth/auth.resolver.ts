import { Resolver } from '@nestjs/graphql'
import { AuthService } from './auth.service'

@Resolver('auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
}
