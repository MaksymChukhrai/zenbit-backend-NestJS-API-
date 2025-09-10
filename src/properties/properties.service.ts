import { Injectable } from '@nestjs/common';
import { Property } from './entities/property.entity';

@Injectable()
export class PropertiesService {
  private properties: Property[] = [
    {
      id: 1,
      name: 'The Marina Torch',
      price: 6500000,
      currency: 'Dhs',
      priceLabel: '6 500 000 Dhs',
      imageUrl:
        'https://zenbit-backend-nestjs-api-production.up.railway.app/images/the_marina_torch.webp',
      yieldPercentage: 9.25,
      soldPercentage: 75,
      ticketSize: '60 000 Dhs',
      daysLeft: 120,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: 'HHHR Tower',
      price: 6500000,
      currency: 'Dhs',
      priceLabel: '6 500 000 Dhs',
      imageUrl:
        'https://zenbit-backend-nestjs-api-production.up.railway.app/images/hhhr-tower.webp',
      yieldPercentage: 9.25,
      soldPercentage: 75,
      ticketSize: '60 000 Dhs',
      daysLeft: 120,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      name: 'Ocean peaks',
      price: 6500000,
      currency: 'Dhs',
      priceLabel: '6 500 000 Dhs',
      imageUrl:
        'https://zenbit-backend-nestjs-api-production.up.railway.app/images/ocean_peaks.webp',
      yieldPercentage: 9.25,
      soldPercentage: 75,
      ticketSize: '60 000 Dhs',
      daysLeft: 150,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      name: 'Al Yaqoub Tower',
      price: 6500000,
      currency: 'Dhs',
      priceLabel: '6 500 000 Dhs',
      imageUrl: 'https://zenbit-backend-nestjs-api-production.up.railway.app/images/ai-yaqoub.webp',
      yieldPercentage: 9.25,
      soldPercentage: 75,
      ticketSize: '60 000 Dhs',
      daysLeft: 150,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  findAll(): Promise<Property[]> {
    return Promise.resolve(this.properties);
  }

  findOne(id: number): Promise<Property | null> {
    const property = this.properties.find((p) => p.id === id);
    return Promise.resolve(property || null);
  }
}
