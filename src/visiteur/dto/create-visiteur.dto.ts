import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
} from 'class-validator';

export class CreateVisiteurDto {
  @IsString()
  @IsNotEmpty()
  nom: string;

  @IsNotEmpty()
  @IsInt()
  nombre_jours: number;

  @IsNotEmpty()
  @IsInt()
  tarif_journalier: number;
}
