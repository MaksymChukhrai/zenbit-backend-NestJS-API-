import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Property } from './entities/property.entity';

@Injectable()
export class PropertiesService implements OnModuleInit {
  constructor(
    @InjectRepository(Property)
    private propertiesRepository: Repository<Property>,
  ) {}

  // Заполняем БД mock данными при старте приложения
  async onModuleInit() {
    const count = await this.propertiesRepository.count();

    // Если БД пустая - добавляем mock данные
    if (count === 0) {
      const mockProperties = [
        {
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
        },
        {
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
        },
        {
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
        },
        {
          name: 'Al Yaqoub Tower',
          price: 6500000,
          currency: 'Dhs',
          priceLabel: '6 500 000 Dhs',
          imageUrl:
            'https://zenbit-backend-nestjs-api-production.up.railway.app/images/ai-yaqoub.webp',
          yieldPercentage: 9.25,
          soldPercentage: 75,
          ticketSize: '60 000 Dhs',
          daysLeft: 150,
        },
      ];

      await this.propertiesRepository.save(mockProperties);
      console.log('✅ Mock properties added to database');
    }
  }

  async findAll(): Promise<Property[]> {
    return this.propertiesRepository.find();
  }

  async findOne(id: number): Promise<Property | null> {
    return this.propertiesRepository.findOne({ where: { id } });
  }
}
