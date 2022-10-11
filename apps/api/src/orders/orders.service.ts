import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Project } from '@project-angular/api-interfaces';

@Injectable()
export class OrdersService {
  mockOrders: Project[] = [
    {
      id: '1',
      name: 'John Snow',
      order: 'Caramel Macchiato',
      complete: false,
    },
    {
      id: '2',
      name: 'Daisy Duck',
      order: 'Americano',
      complete: false,
    },
    {
      id: '3',
      name: 'Marilyn Monroe',
      order: 'White Mocha ',
      complete: false,
    },
    {
      id: '4',
      name: 'Mickey Mouse',
      order: 'Hot Chocolate',
      complete: false,
    },
  ];

  findAll() {
    return this.mockOrders;
  }

  findOne(id: string) {
    return this.mockOrders.find((order) => order.id === id);
  }

  create(order: Project) {
    this.mockOrders = [
      ...this.mockOrders,
      Object.assign({}, order, { id: uuidv4() }),
    ];
    return this.mockOrders;
  }

  update(id: string, order: Project) {
    this.mockOrders = this.mockOrders.map((orderUpdate) =>
      orderUpdate.id === id ? order : orderUpdate
    );
    return this.mockOrders;
  }

  remove(id: string) {
    this.mockOrders = this.mockOrders.filter((order) => order.id !== id);
    return this.mockOrders;
  }
}
