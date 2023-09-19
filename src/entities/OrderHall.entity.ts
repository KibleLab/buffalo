import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import Order from '@/entities/Order.entity';

@Entity({ name: 'order_hall' })
export default class OrderHall {
  @PrimaryColumn({ name: 'order_hall_id', type: 'varchar', length: 16 })
  orderHallId!: string;

  @Column({ name: 'order_hall_table_no', type: 'decimal', precision: 4, scale: 0, nullable: false })
  orderHallTableNo!: number;

  @Column({ name: 'order_hall_table_status', type: 'varchar', length: 10, nullable: false })
  orderHallTableStatus!: string;

  @OneToOne(() => Order, (order) => order.orderId, { nullable: true })
  @JoinColumn({
    name: 'order_id',
    referencedColumnName: 'orderId',
    foreignKeyConstraintName: 'order_hall_order_id_fk',
  })
  orderId?: string;
}
