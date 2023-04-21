import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaModule } from './prisma/prisma.module';
import { VisiteurModule } from './visiteur/visiteur.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, VisiteurModule],
})
export class AppModule {}
