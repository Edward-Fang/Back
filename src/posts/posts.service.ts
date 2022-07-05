import { PaginationQueryDto } from '@/common/dto/pagination-query.dto'
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

  async findAll(pagination: PaginationQueryDto) {
    const { limit, offset } = pagination
    return this.postsRepo.find({
      skip: offset,
      take: limit
    })
  }

  async findOne(id: any) {
    const post = await this.postsRepo.findOne(id)
    if (!post) throw new NotFoundException()
    return post
  }

  async create(createDTO: PostsCreateDTO) {
    const dto = {
      ...createDTO,
      createAt: new Date(),
      updateAt: new Date()
    }
    return this.postsRepo.save(dto)
  }

  async update(id, updateDTO: PostsUpdateDTO) {
    const post = await this.postsRepo.findOne(id)
    if (!post) throw new NotFoundException()
    return this.postsRepo.save({
      ...post,
      ...updateDTO,
      updateAt: new Date()
    })
  }

  async delete(id: string) {
    const { affected } = await this.postsRepo.delete(id)
    if (affected) return true
    return false
  }
}
