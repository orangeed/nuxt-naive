import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("project")
export class Project {
  @PrimaryGeneratedColumn("increment")
  id: number

  @Column()
  name: string

  @Column()
  img: string

  @Column()
  author: string

  // 简介
  @Column("text")
  introduction: string

  //   后端创建数据的时候生成
  @Column({ nullable: true })
  createTime: Date
}
