import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'business' })
export default class Business {
  @PrimaryColumn({ name: 'bsn_id', type: 'varchar', length: 8 })
  bsnId!: string;

  @Column({ name: 'bsn_name', type: 'varchar', length: 20, nullable: true })
  bsnName?: string;

  @Column({ name: 'bsn_contact_no', type: 'varchar', length: 11, nullable: true })
  bsnContactNo?: string;

  @Column({ name: 'bsn_reg_no', type: 'varchar', length: 10, nullable: true })
  bsnRegNo?: string;

  @Column({ name: 'is_deleted', type: 'boolean', default: false, nullable: false })
  isDeleted!: boolean;
}
