import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  username;

  @Column()
  password;
}

export default User;
