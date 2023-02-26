import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("movies")
export class Movies {
  @PrimaryGeneratedColumn("increment")
  id: number

  @Column()
  name: string

  @Column()
  img: string

  @Column({ nullable: true })
  time: Date

  //   分类
  @Column()
  type: number

  @Column("text")
  content: string

  //   后端创建数据的时候生成
  @Column({ nullable: true })
  createTime: Date
}
