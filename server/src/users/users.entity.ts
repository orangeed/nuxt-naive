import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({
    nullable: true,
  })
  avatar: string;

  @Column('simple-array', {
    nullable: true,
  })
  roles: string[];

  @Column('mediumtext', {
    nullable: true,
  })
  intro: string;

  @Column()
  status: boolean;

  // 1正常，2注销
  @Column()
  delStatus: string;

  @Column({
    select: false,
    nullable: true,
  })
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt: Date;
}
