import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Posts } from './entity/post.entity'

@Injectable()
export class PostsService {
  constructor(@InjectRepository(Posts) public postsRepo: Repository<Posts>) {}

  public findAll() {
    return this.postsRepo.find()
  }

  public findOne(id: any) {
    return this.postsRepo.findOne(id)
  }

  public create(goods: Partial<Posts>) {
    return this.postsRepo.save(goods)
  }

  public update(goods: Partial<Posts>) {
    return this.postsRepo.update(goods.id, goods)
  }

  public delete(id: string) {
    return this.postsRepo.delete(id)
  }
}
