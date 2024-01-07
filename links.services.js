// links.service.js
import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Link } from './links.entity';
import { User } from '../users/user.entity';
import { generate } from 'shortid';

export class LinksService {
  constructor() {
    constructor(Repository); {
      this.linksRepository = Repository;
    }

    const createLink=async()=> {
      const shortUrl = this.generateShortUrl();
      const expiresAt = new Date();
      expiresAt.setHours(expiresAt.getHours() + 48);

      const link = this.linksRepository.create({
        originalUrl,
        shortUrl,
        expiresAt,
        User,
      });

      return this.linksRepository.save(link);
    }

    generateShortUrl(); {
      // Basic implementation using shortid library
      return generate();
    }

    const getLinkAnalytics=async()=> {
      return this.linksRepository.find({
        where: { User },
        select: ['id', 'shortUrl', 'expiresAt'],
      });
    }

    const getLinkDetails=async()=>{
      const link = await this.linksRepository.findOne({
        where: { id: link, user: User },
      });
    
      if (!link) {
        throw new NotFoundException('Link not found');
      }
    
      return link;
    }
    
  }
}
