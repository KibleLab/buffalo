import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import Business from '@/entities/Business.entity';

@Entity({ name: 'sales' })
export default class Sales {
  @PrimaryColumn({ name: 'sales_id', type: 'varchar', length: 16 })
  salesId!: string;

  @Column({ name: 'sales_date', type: 'date', nullable: true })
  salesDate?: Date;

  @Column({ name: 'opening_time', type: 'time', nullable: true })
  openingTime?: Date;

  @Column({ name: 'closing_time', type: 'time', nullable: true })
  closingTime?: Date;

  @ManyToOne(() => Business, (bsn) => bsn.bsnId, { nullable: false })
  @JoinColumn({
    name: 'bsn_id',
    referencedColumnName: 'bsnId',
    foreignKeyConstraintName: 'sales_bsn_id_fk',
  })
  bsnId!: string;
}
