import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('properties')
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  price: number;

  @Column()
  currency: string;

  @Column({ nullable: true })
  priceLabel?: string; // "6 500 000 Dhs"

  @Column()
  imageUrl: string;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  yieldPercentage: number;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  soldPercentage: number;

  @Column()
  ticketSize: string; // "60 000 Dhs"

  @Column()
  daysLeft: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
