import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity()
export class Posts {
  @ObjectIdColumn()
  readonly id: ObjectID

  @Column()
  readonly title: string

  @Column()
  readonly author: string

  @Column()
  readonly posterUrl: string

  @Column()
  readonly introduction: string

  @Column()
  readonly content: string

  @Column()
  readonly tag: string

  @Column()
  readonly createAt: Date

  @Column()
  readonly updateAt: Date

  @Column()
  readonly updateAuth?: string
}
