import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { PostsCreateDTO } from './dto/post-create.dto'
import { PostsUpdateDTO } from './dto/post-update.dto'
import { Posts } from './entity/post.entity'

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts) private readonly postsRepo: Repository<Posts>
  ) {}

  async findAll() {
    return this.postsRepo.find()
  }

  async findOne(id: any) {
    const post = await this.postsRepo.findOne(id)
    if (!post) throw new NotFoundException()
    return post
  }

  async create(dto: PostsCreateDTO) {
    return this.postsRepo.save(dto)
  }

  async update(id, dto: PostsUpdateDTO) {
    const post = await this.postsRepo.findOne(id)
    if (!post) throw new NotFoundException()
    return this.postsRepo.save({ ...post, ...dto })
  }

  async delete(id: string) {
    // DeleteResult {
    //   raw: { acknowledged: true, deletedCount: 1 },
    //   affected: 1
    // }
    // DeleteResult {
    //   raw: { acknowledged: true, deletedCount: 0 },
    //   affected: 0
    // }
    const { affected } = await this.postsRepo.delete(id)
    if (affected) return true
    return false
  }
}
