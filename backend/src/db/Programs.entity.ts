//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Programs')
export class ProgramsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  Name: string;

  @Column('date', { nullable: true })
  Date: Date;

  @Column('text', { nullable: true })
  Description: string;

  @Column('text', { nullable: true })
  Category: string;

  @Column('text', { nullable: true })
  AssociatedMedia: string;
}
