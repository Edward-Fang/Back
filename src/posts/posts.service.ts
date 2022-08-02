import { PaginationQueryDto } from '../common/dto/pagination-query.dto'
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

  async findAllPosts(pagination: PaginationQueryDto) {
    const { limit, offset } = pagination
    return this.postsRepo.find({
      skip: offset,
      take: limit
    })
  }

  async findPostsByTag(tag: string) {
    return this.postsRepo.find({
      where: { tag }
    })
  }

  async findOnePost(id: any) {
    const post = await this.postsRepo.findOne(id)
    if (!post) throw new NotFoundException()
    return post
  }

  async createPost(createDTO: PostsCreateDTO) {
    return this.postsRepo.save({
      ...createDTO,
      createAt: new Date(),
      updateAt: new Date()
    })
  }

  async updatePost(id, updateDTO: PostsUpdateDTO) {
    const post = await this.postsRepo.findOne(id)
    if (!post) throw new NotFoundException()
    return this.postsRepo.save({
      ...post,
      ...updateDTO,
      updateAt: new Date()
    })
  }

  async deletePost(id: string) {
    const { affected } = await this.postsRepo.delete(id)
    if (affected) return true
    return false
  }
}
