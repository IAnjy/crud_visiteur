import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class EditVisiteurDto {
  @IsString()
  @IsOptional()
  nom?: string;

  @IsOptional()
  @IsInt()
  nombre_jours?: number;

  @IsInt()
  @IsOptional()
  tarif_journalier?: number;
}
