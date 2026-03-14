import {
  Controller,
  HttpCode,
  HttpStatus,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PortfoliosService } from './portfolios.service';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';
import { successResponse } from './../../utils/index';

@Controller('portfolios')
export class PortfoliosController {
  constructor(private readonly portfoliosService: PortfoliosService) {}

  // CREATE PORTFOLIO API
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createPortfolioDto: CreatePortfolioDto) {
    const newPortfolio =
      await this.portfoliosService.create(createPortfolioDto);

    return successResponse(newPortfolio, 'Portfolio created successfully.');
  }

  // GET ALL PORTFOLIO API
  @Get()
  async findAll() {
    const portfolioList = await this.portfoliosService.findAll();
    return successResponse(portfolioList, 'All portfolio list.');
  }

  // GET SINGLE PORTFOLIO API
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const singlePortfolio = await this.portfoliosService.findOne(id);
    return successResponse(singlePortfolio, 'Single portfolio for id-' + id);
  }

  // UPDATE PORTFOLIO API
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePortfolioDto: UpdatePortfolioDto,
  ) {
    const updatedPortfolio = await this.portfoliosService.update(
      id,
      updatePortfolioDto,
    );
    return successResponse(updatedPortfolio, 'Portfolio updated successfully.');
  }

  // DELETE PORTFOLIO API
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const deletedPortfolio = await this.portfoliosService.remove(id);
    return successResponse(deletedPortfolio, 'Portfolio deleted successfully.');
  }
}
