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
      imageUrl: 'https://drive.google.com/uc?id=1Zcaw9iPeDg4EUPl19Y_09loeYbU8OaRB',
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
      imageUrl: 'https://drive.google.com/uc?id=16Rg1hLQTNb0wHtBiNndjT6BtkPhALHXu',
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
      imageUrl: 'https://drive.google.com/uc?id=1-ay-402uMvfHl-vz9VWp78blAfYGrjLE',
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
      imageUrl: 'https://drive.google.com/uc?id=1gpUpXgVhH8KxJd8ympe9cyzAECoz7Tbh',
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
