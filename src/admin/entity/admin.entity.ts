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
  readonly mobile: string

  @Column()
  readonly email: string

  @Column()
  readonly createAt: string

  @Column()
  readonly updateAt: string
}
