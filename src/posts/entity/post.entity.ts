import {
  Entity,
  Column,
  ObjectID,
  ObjectIdColumn,
  PrimaryGeneratedColumn
} from 'typeorm'

@Entity()
export class Posts {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  readonly id: ObjectID

  @Column()
  readonly title: string

  @Column()
  readonly author: string

  @Column()
  readonly posterUrl: string

  @Column()
  readonly content: string

  @Column()
  readonly tags: string

  @Column()
  readonly isPublic: boolean

  @Column()
  readonly createAt: Date

  @Column()
  readonly updateAt: Date
}
