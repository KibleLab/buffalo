import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'emp_permission' })
export default class EmpPermission {
  @PrimaryColumn({ name: 'emp_perm_id', type: 'int', generated: 'increment' })
  empPermId!: number;

  @Column({ name: 'emp_perm_name', type: 'varchar', length: 10, nullable: false })
  empPermName!: string;
}
