import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DomainEntity } from './models/domain.entity';
import * as whois from 'whois-json'

@Injectable()
export class AppService {
  constructor(@InjectRepository(DomainEntity)private domainRepo:Repository<DomainEntity>){}

  async post(domain:string,data:DomainEntity):Promise<any>{
    let has = await this.domainRepo.findOne({domain})
    if(has){
      return has
    }
    else{
      let Whois = await whois(domain)
      if(Whois){
       return await this.domainRepo.save({...data,whois:Whois})
              }
      else{
     return {mssage:'something went wrong'}
         }
    }
  }
}
