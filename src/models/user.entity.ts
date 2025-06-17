import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { PetPostEntity } from './pet-post.entity'

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @OneToMany(() => PetPostEntity, post => post.user)
  petPosts: PetPostEntity[]
}
