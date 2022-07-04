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

  public findOne(id: string) {
    return this.postsRepo.findOneById(id)
  }

  public create(posts: Partial<Posts>) {
    return this.postsRepo.save(posts)
  }

  public update(id: string, posts: Partial<Posts>) {
    return this.postsRepo.update(id, posts)
  }

  public delete(id: string) {
    return this.postsRepo.delete(id)
  }
}
