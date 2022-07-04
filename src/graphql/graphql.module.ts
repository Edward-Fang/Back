import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true, // 代码先行
      driver: ApolloDriver,
      sortSchema: true,
      debug: false,
      playground: true
    })
  ]
})
export class GraphqlModule {}
