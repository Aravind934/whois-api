import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class Valuation {
  @Column()
  value: number;
  @Column({ default: 'USD' })
  currency: string;
}

export class ValuationSources {
  @Column({ enum: ['godaddy'] })
  source: string;
  @Column()
  value: number;
  @Column()
  currency: string;
}

@Entity({ name: 'domain' })
export class DomainEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: number;
  @Column({ unique: true })
  domain: string;
  @Column('simple-json')
  whois?: any;
  @Column(() => Valuation)
  valuation: Valuation;
  @Column('simple-json')
  valuationSources: ValuationSources[];
}
