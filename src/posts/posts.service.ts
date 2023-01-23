import { PaginationQueryDto } from '../common/dto/pagination-query.dto'
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { PostsCreateDTO, PostsUpdateDTO } from './dto/post.dto'
import { Posts } from './entity/post.entity'
import * as dayjs from 'dayjs'

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts) private readonly postsRepo: Repository<Posts>
  ) {}

  findAll({ limit, offset }: PaginationQueryDto) {
    return this.postsRepo.find({
      skip: offset * limit,
      take: Number(limit)
    })
  }

  async findAllPosts(paginationDto: PaginationQueryDto) {
    return await this.findAll(paginationDto)
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

  async adminFindAll(paginationDto: PaginationQueryDto) {
    const list = await this.findAll(paginationDto)
    list.forEach(e => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { content, posterUrl, ...result } = e
      return result
    })
    return list
  }

  async createPost(createDTO: PostsCreateDTO) {
    await this.postsRepo.save({
      ...createDTO,
      createAt: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      updateAt: dayjs().format('YYYY-MM-DD HH:mm:ss')
    })
    return true
  }

  async updatePost(id, updateDTO: PostsUpdateDTO) {
    const post = await this.postsRepo.findOne(id)
    if (!post) throw new NotFoundException()
    return this.postsRepo.save({
      ...post,
      ...updateDTO,
      updateAt: dayjs().format('YYYY-MM-DD HH:mm:ss')
    })
  }

  async deletePost(id: string) {
    const { affected } = await this.postsRepo.delete(id)
    if (affected) return true
    return false
  }
}
