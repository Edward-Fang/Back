import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { PostsCreateDTO, PostsUpdateDTO } from './dto/post.dto'
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
    return this.postsRepo.delete(id)
  }
}
