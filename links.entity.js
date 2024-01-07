import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

export @Entity()
class Link {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  originalUrl;

  @Column()
  shortUrl;

  @Column()
  expiresAt;

  @ManyToOne(() => User, (user) => user.links)
  user;
}

module.exports = Link;
