import { Module } from '@nestjs/common';
import { VisiteurController } from './visiteur.controller';
import { VisiteurService } from './visiteur.service';

@Module({
  controllers: [VisiteurController],
  providers: [VisiteurService]
})
export class VisiteurModule {}
