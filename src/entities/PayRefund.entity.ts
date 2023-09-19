import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import Payment from '@/entities/Payment.entity';

@Entity({ name: 'pay_refund' })
export default class PayRefund {
  @PrimaryColumn({ name: 'pay_refund_id', type: 'varchar', length: 16 })
  payRefundId!: string;

  @Column({ name: 'pay_refund_datetime', type: 'datetime', nullable: false })
  payRefundDatetime!: Date;

  @Column({ name: 'pay_refund_amount', type: 'decimal', precision: 10, scale: 0, nullable: false })
  payRefundAmount!: number;

  @ManyToOne(() => Payment, (pay) => pay.payId, { nullable: false })
  @JoinColumn({
    name: 'pay_id',
    referencedColumnName: 'payId',
    foreignKeyConstraintName: 'pay_refund_pay_id_fk',
  })
  payId!: string;
}
