import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { VisiteurService } from './visiteur.service';
import { CreateVisiteurDto } from './dto/create-visiteur.dto';
import { EditVisiteurDto } from './dto/edit-visiteur.dto';

@Controller('visiteurs')
export class VisiteurController {
  constructor(private visiteurService: VisiteurService) {}
  @Get()
  getVisiteurs() {
    return this.visiteurService.getVisiteurs();
  }

  @Get(':id')
  getVisitieurbyID(@Param('id', ParseIntPipe) visiteurid: number) {
    return this.visiteurService.getVisitieurbyID(visiteurid);
  }

  @Post()
  createVisiteur(@Body() dto: CreateVisiteurDto) {
    return this.visiteurService.createVisiteur(dto);
  }

  @Put(':id')
  editVisiteur(
    @Body() dto: EditVisiteurDto,
    @Param('id', ParseIntPipe) visiteurid: number,
  ) {
    return this.visiteurService.editVisiteur(visiteurid, dto);
  }

  @Delete(':id')
  deleteVisiteur(@Param('id', ParseIntPipe) visiteurid: number) {
    return this.visiteurService.deleteVisiteur(visiteurid);
  }
}
