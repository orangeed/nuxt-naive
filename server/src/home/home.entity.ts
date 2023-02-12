import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('home')
export class Home {
    @PrimaryGeneratedColumn('increment')
    id: number;

    // 用户id，用于区分是哪一个用户
    @Column()
    userId: string

    // 时间，早晨，中午，傍晚，睡前，补打
    @Column()
    timeLabel: string

    // 剂量，也就是一次性打了多少个
    @Column()
    dose: number

    // 血糖，当测量的时候才有
    @Column({ type: 'float', nullable: true })
    sugger: number

    // 添加记录的时间，后端自动生成一个
    @Column()
    createTime: Date

    // 备注
    @Column({ nullable: true })
    remark: string

    //   @Column()
    //   name: string;

    //   @Column()
    //   password: string;

    //   @Column({
    //     nullable: true,
    //   })
    //   avatar: string;

    //   @Column('simple-array', {
    //     nullable: true,
    //   })
    //   roles: string[];

    //   @Column('mediumtext', {
    //     nullable: true,
    //   })
    //   intro: string;

    //   @Column({ nullable: true, })
    //   status: boolean;

    //   @Column({
    //     select: false,
    //     nullable: true,
    //   })
    //   createdAt: Date;

    //   @Column({ nullable: true, })
    //   updatedAt: Date;
}
