import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('dose')
export class Dose {
    @PrimaryGeneratedColumn('increment')
    id: number

    //  用户id
    @Column()
    userId: string

    // 胰岛素名称
    @Column()
    name: string

    // 胰岛素类型
    @Column()
    type: number

    // 胰岛素单位
    @Column()
    allDose: number

    // 胰岛素价格
    @Column({ nullable: true })
    price: number

    // 胰岛素剩余量
    @Column({ nullable: true })
    remaining: number

    // 使用次数
    @Column({ nullable: true })
    frequency: number

    // 创建时间
    @Column()
    createTime: string
}