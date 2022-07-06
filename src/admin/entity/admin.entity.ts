import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity()
export class Admin {
  @ObjectIdColumn()
  readonly id: ObjectID

  @Column()
  readonly username: string

  @Column()
  readonly password: string

  @Column()
  readonly mobile: number

  @Column()
  readonly email: string

  @Column()
  readonly createAt: Date

  @Column()
  readonly updateAt: Date
}
