import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Portfolio, TPortfolio } from './portfolios.schema';

@Injectable()
export class PortfoliosService {
  constructor(
    @InjectModel(Portfolio.name) private portfolioModel: Model<TPortfolio>,
  ) {}

  // CREATE NEW PORTFOLIO
  async create(createPortfolioDto: CreatePortfolioDto): Promise<Portfolio> {
    const newPortfolio = await this.portfolioModel.create(createPortfolioDto);

    return newPortfolio;
  }

  // GET ALL PORTFOLIO
  async findAll(): Promise<Portfolio[]> {
    return await this.portfolioModel.find({}).sort({ createdAt: 1 });
  }

  // GET SINGLE PORTFOLIO
  async findOne(id: string): Promise<Portfolio> {
    const portfolio = await this.portfolioModel.findOne({ _id: id });

    if (!portfolio) {
      throw new NotFoundException('Portfolio not found!');
    }

    return portfolio;
  }

  // UPDATE A PORTFOLIO
  async update(
    id: string,
    updatePortfolioDto: UpdatePortfolioDto,
  ): Promise<Portfolio> {
    const updatedPortfolio = await this.portfolioModel.findByIdAndUpdate(
      id,
      updatePortfolioDto,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedPortfolio) {
      throw new NotFoundException('Portfolio not found!');
    }

    return updatedPortfolio;
  }

  // DELETE A PORTFOLIO
  async remove(id: string) {
    const deleted = await this.portfolioModel.findByIdAndDelete(id);

    if (!deleted) {
      throw new NotFoundException('Portfolio not found');
    }

    return deleted;
  }
}
