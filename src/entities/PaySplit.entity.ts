import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import Payment from '@/entities/Payment.entity';

@Entity({ name: 'pay_split' })
export default class PaySplit {
  @PrimaryColumn({ name: 'pay_split_id', type: 'varchar', length: 16 })
  paySplitId!: string;

  @Column({ name: 'pay_split_amount', type: 'decimal', precision: 10, scale: 0, nullable: false })
  paySplitAmount!: number;

  @Column({ name: 'pay_method', type: 'varchar', length: 10, nullable: false })
  payMethod!: string;

  @Column({ name: 'card_acquirer', type: 'varchar', length: 2, nullable: true })
  cardAcquirer?: string;

  @Column({ name: 'is_installment', type: 'boolean', default: false, nullable: false })
  isInstallment!: boolean;

  @ManyToOne(() => Payment, (pay) => pay.payId, { nullable: false })
  @JoinColumn({
    name: 'pay_id',
    referencedColumnName: 'payId',
    foreignKeyConstraintName: 'pay_split_pay_id_fk',
  })
  payId!: string;
}
