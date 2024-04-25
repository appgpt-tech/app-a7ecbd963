//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PrayerTimes')
export class PrayerTimesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date', { nullable: true })
  PrayerTimeStart: Date;

  @Column('date', { nullable: true })
  Azan: Date;

  @Column('date', { nullable: true })
  Jamat: Date;

  @Column('date', { nullable: true })
  PrayerTimeEnd: Date;
}
