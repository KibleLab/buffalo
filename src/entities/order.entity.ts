import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import Payment from '@/entities/payment.entity';

@Entity({ name: 'order' })
export default class Order {
  @PrimaryColumn({ name: 'order_id', type: 'varchar', length: 16 })
  orderId!: string;

  @Column({ name: 'order_datetime', type: 'datetime', nullable: false })
  orderDatetime!: Date;

  @Column({ name: 'order_status', type: 'varchar', length: 10, nullable: false })
  orderStatus!: string;

  @OneToOne(() => Payment, (pay) => pay.payId, { nullable: false })
  @JoinColumn({
    name: 'pay_id',
    referencedColumnName: 'payId',
    foreignKeyConstraintName: 'order_pay_id_fk',
  })
  payId!: string;
}
