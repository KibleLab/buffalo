import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import Business from '@/entities/Business.entity';

@Entity({ name: 'menu' })
export default class Menu {
  @PrimaryColumn({ name: 'menu_id', type: 'varchar', length: 16 })
  menuId!: string;

  @Column({ name: 'menu_name', type: 'varchar', length: 20, nullable: false })
  menuName!: string;

  @Column({ name: 'menu_price', type: 'decimal', precision: 10, scale: 0, nullable: false })
  menuPrice!: number;

  @Column({ name: 'menu_image_path', type: 'varchar', length: 255, nullable: true })
  menuImagePath?: string;

  @Column({ name: 'is_disabled', type: 'boolean', default: false, nullable: false })
  isDisabled!: boolean;

  @Column({ name: 'is_deleted', type: 'boolean', default: false, nullable: false })
  isDeleted!: boolean;

  @ManyToOne(() => Business, (bsn) => bsn.bsnId, { nullable: false })
  @JoinColumn({
    name: 'bsn_id',
    referencedColumnName: 'bsnId',
    foreignKeyConstraintName: 'menu_bsn_id_fk',
  })
  bsnId!: string;
}
