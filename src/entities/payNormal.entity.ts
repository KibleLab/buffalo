import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import Payment from '@/entities/payment.entity';

@Entity({ name: 'pay_normal' })
export default class PayNormal {
  @PrimaryColumn({ name: 'pay_normal_id', type: 'varchar', length: 16 })
  payNormalId!: string;

  @Column({ name: 'pay_amount', type: 'decimal', precision: 10, scale: 0, nullable: false })
  payAmount!: number;

  @Column({ name: 'pay_method', type: 'varchar', length: 10, nullable: false })
  payMethod!: string;

  @Column({ name: 'card_acquirer', type: 'varchar', length: 2, nullable: true })
  cardAcquirer?: string;

  @Column({ name: 'is_installment', type: 'boolean', default: false, nullable: false })
  isInstallment!: boolean;

  @OneToOne(() => Payment, (pay) => pay.payId, { nullable: false })
  @JoinColumn({
    name: 'pay_id',
    referencedColumnName: 'payId',
    foreignKeyConstraintName: 'pay_normal_pay_id_fk',
  })
  payId!: string;
}
