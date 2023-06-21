import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import Sales from '@/entities/sales.entity';

@Entity({ name: 'payment' })
export default class Payment {
  @PrimaryColumn({ name: 'pay_id', type: 'varchar', length: 16 })
  payId!: string;

  @Column({ name: 'pay_datetime', type: 'datetime', nullable: false })
  payDatetime!: Date;

  @Column({ name: 'pay_total_amount', type: 'decimal', precision: 10, scale: 0, nullable: false })
  payTotalAmount!: number;

  @Column({ name: 'pay_type', type: 'varchar', length: 10, nullable: false })
  payType!: string;

  @Column({ name: 'is_deleted', type: 'boolean', default: false, nullable: false })
  isDeleted!: boolean;

  @ManyToOne(() => Sales, (sales) => sales.salesId, { nullable: false })
  @JoinColumn({
    name: 'sales_id',
    referencedColumnName: 'salesId',
    foreignKeyConstraintName: 'payment_sales_id_fk',
  })
  salesId!: string;
}
