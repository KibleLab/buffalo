import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import Business from '@/entities/Business.entity';

@Entity({ name: 'owner' })
export default class Owner {
  @PrimaryColumn({ name: 'owner_id', type: 'varchar', length: 20 })
  ownerId!: string;

  @Column({ name: 'owner_pw', type: 'varchar', length: 255, nullable: false })
  ownerPw!: string;

  @Column({ name: 'owner_name', type: 'varchar', length: 10, nullable: false })
  ownerName!: string;

  @Column({ name: 'owner_contact_no', type: 'varchar', length: 11, nullable: false })
  ownerContactNo!: string;

  @Column({ name: 'is_deleted', type: 'boolean', default: false, nullable: false })
  isDeleted!: boolean;

  @OneToOne(() => Business, (bsn) => bsn.bsnId, { nullable: false })
  @JoinColumn({
    name: 'bsn_id',
    referencedColumnName: 'bsnId',
    foreignKeyConstraintName: 'owner_bsn_id_fk',
  })
  bsnId!: string;
}
