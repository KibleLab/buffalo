import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import Payment from '@/entities/payment.entity';

@Entity({ name: 'pay_installment' })
export default class PayInstallment {
  @PrimaryColumn({ name: 'pay_inst_id', type: 'varchar', length: 16 })
  payInstId!: string;

  @Column({ name: 'pay_inst_period', type: 'decimal', precision: 2, scale: 0, nullable: false })
  payInstPeriod!: number;

  @Column({ name: 'pay_inst_amount', type: 'decimal', precision: 10, scale: 0, nullable: false })
  payInstAmount!: number;

  @ManyToOne(() => Payment, (pay) => pay.payId, { nullable: false })
  @JoinColumn({
    name: 'pay_id',
    referencedColumnName: 'payId',
    foreignKeyConstraintName: 'pay_installment_pay_id_fk',
  })
  payId!: string;
}
