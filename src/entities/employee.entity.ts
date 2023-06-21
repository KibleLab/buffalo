import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import Business from '@/entities/business.entity';
import EmpPermission from '@/entities/empPermission.entity';

@Entity({ name: 'employee' })
export default class Employee {
  @PrimaryColumn({ name: 'emp_id', type: 'varchar', length: 20 })
  empId!: string;

  @Column({ name: 'emp_pw', type: 'varchar', length: 255, nullable: false })
  empPw!: string;

  @Column({ name: 'emp_name', type: 'varchar', length: 10, nullable: false })
  empName!: string;

  @Column({ name: 'emp_contact_no', type: 'varchar', length: 11, nullable: false })
  empContactNo!: string;

  @Column({ name: 'is_deleted', type: 'boolean', default: false, nullable: false })
  isDeleted!: boolean;

  @OneToOne(() => Business, (bsn) => bsn.bsnId, { nullable: false })
  @JoinColumn({
    name: 'bsn_id',
    referencedColumnName: 'bsnId',
    foreignKeyConstraintName: 'employee_bsn_id_fk',
  })
  bsnId!: string;

  @OneToOne(() => EmpPermission, (perm) => perm.empPermId, { nullable: false })
  @JoinColumn({
    name: 'emp_perm_id',
    referencedColumnName: 'empPermId',
    foreignKeyConstraintName: 'employee_emp_perm_id_fk',
  })
  empPermId!: number;
}
