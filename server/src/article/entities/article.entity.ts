import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('article')
export class Article {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  //   分类
  @Column('simple-array')
  tags: string[];

  @Column('text')
  content: string;

  //   后端创建数据的时候生成
  @Column({ nullable: true })
  createTime: Date;

  //   后端修改数据的时候生成
  @Column({ nullable: true })
  updateTime: Date;
}
