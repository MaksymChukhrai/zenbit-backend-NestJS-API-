import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = []; // Временное хранение в памяти
  private nextId = 1;

  create(userData: Partial<User>): Promise<User> {
    const user = {
      id: this.nextId++,
      email: userData.email,
      password: userData.password,
      firstName: userData.firstName || null,
      lastName: userData.lastName || null,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as User;

    this.users.push(user);
    return Promise.resolve(user);
  }

  findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => user.email === email) || null;
    return Promise.resolve(user);
  }

  findById(id: number): Promise<User | null> {
    const user = this.users.find((user) => user.id === id) || null;
    return Promise.resolve(user);
  }
}
