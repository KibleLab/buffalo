import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import OrderHall from '@/entities/orderHall.entity';

@Entity({ name: 'order_reservation' })
export default class OrderReservation {
  @PrimaryColumn({ name: 'order_rsvn_id', type: 'varchar', length: 16 })
  orderRsvnId!: string;

  @Column({ name: 'order_rsvn_name', type: 'varchar', length: 10, nullable: false })
  orderRsvnName!: string;

  @Column({ name: 'order_rsvn_contact_no', type: 'varchar', length: 11, nullable: false })
  orderRsvnContactNo!: string;

  @Column({ name: 'order_rsvn_datetime', type: 'datetime', nullable: false })
  orderRsvnDatetime!: Date;

  @ManyToOne(() => OrderHall, (orderHall) => orderHall.orderHallId, { nullable: true })
  @JoinColumn({
    name: 'order_hall_id',
    referencedColumnName: 'orderHallId',
    foreignKeyConstraintName: 'order_reservation_order_hall_id_fk',
  })
  orderHallId?: string;
}
