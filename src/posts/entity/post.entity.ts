import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Posts {
  @PrimaryGeneratedColumn()
  public readonly id: string

  @Column()
  public readonly name: string

  @Column()
  public readonly title: string
}
