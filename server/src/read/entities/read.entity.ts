import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("read")
export class Read {
  @PrimaryGeneratedColumn("increment")
  id: number

  @Column()
  name: string

  @Column()
  img: string

  @Column()
  author: string

  // 描述
  @Column("text")
  introduction: string

  @Column({ nullable: true })
  time: Date

  @Column("text")
  content: string

  //   后端创建数据的时候生成
  @Column({ nullable: true })
  createTime: Date
}
