import {
  Column,
  Entity,
  ObjectID,
  ObjectIdColumn,
  PrimaryGeneratedColumn
} from 'typeorm'

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  readonly id: ObjectID

  @Column()
  readonly username: string

  @Column()
  readonly password: string

  @Column()
  readonly createAt: Date

  @Column()
  readonly updateTime: Date
}
