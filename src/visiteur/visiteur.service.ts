import { Injectable } from '@nestjs/common';
import { CreateVisiteurDto } from './dto/create-visiteur.dto';
import { EditVisiteurDto } from './dto/edit-visiteur.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VisiteurService {
  constructor(private prisma: PrismaService) {}

  getVisiteurs() {
    return this.prisma.visiteur.findMany();
  }

  deleteVisiteur(visiteurid: number) {
    return this.prisma.visiteur.delete({ where: { num_visiteur: visiteurid } });
  }
  editVisiteur(visiteurid: number, dto: EditVisiteurDto) {
    return this.prisma.visiteur.update({
      where: { num_visiteur: visiteurid },
      data: { ...dto },
    });
  }
  async createVisiteur(dto: CreateVisiteurDto) {
    // const data = {
    //   nom: dto.nom,
    //   nombre_jours: dto.nombre_jours,
    //   tarif_journalier: dto.tarif_journalier,
    // };

    const visiteur = await this.prisma.visiteur.create({ data: dto });
    return visiteur;
  }
  getVisitieurbyID(visiteurid: number) {
    return this.prisma.visiteur.findUnique({
      where: { num_visiteur: visiteurid },
    });
  }
}
