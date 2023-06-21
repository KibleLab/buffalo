import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import Order from '@/entities/order.entity';
import Menu from '@/entities/menu.entity';

@Entity({ name: 'order_history' })
export default class OrderHistory {
  @PrimaryColumn({ name: 'order_history_id', type: 'varchar', length: 16 })
  orderHistoryId!: string;

  @Column({ name: 'order_quan', type: 'decimal', precision: 2, scale: 0, nullable: false })
  orderQuan!: number;

  @ManyToOne(() => Order, (order) => order.orderId, { nullable: false })
  @JoinColumn({
    name: 'order_id',
    referencedColumnName: 'orderId',
    foreignKeyConstraintName: 'order_history_order_id_fk',
  })
  orderId!: string;

  @ManyToOne(() => Menu, (menu) => menu.menuId, { nullable: false })
  @JoinColumn({
    name: 'menu_id',
    referencedColumnName: 'menuId',
    foreignKeyConstraintName: 'order_history_menu_id_fk',
  })
  menuId!: string;
}
