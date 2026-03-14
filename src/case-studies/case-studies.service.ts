import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CaseStudy, TCaseStudy } from './case-studies.schema';

import { CreateCaseStudyDto } from './dto/create-case-study.dto';
import { UpdateCaseStudyDto } from './dto/update-case-study.dto';

@Injectable()
export class CaseStudiesService {
  constructor(
    @InjectModel(CaseStudy.name)
    private caseStudyModel: Model<TCaseStudy>,
  ) {}

  // CREATE NEW CASE-STUDY
  async create(dto: CreateCaseStudyDto): Promise<CaseStudy> {
    const caseStudy = new this.caseStudyModel(dto);
    return caseStudy.save();
  }

  // GET ALL CASE-STUDY
  async findAll(): Promise<CaseStudy[]> {
    return this.caseStudyModel
      .find()
      .populate('portfolioId')
      .sort({ createdAt: -1 });
  }

  // GET SINGLE CASE-STUDY
  async findOne(id: string): Promise<CaseStudy> {
    const caseStudy = await this.caseStudyModel
      .findById(id)
      .populate('portfolioId');

    if (!caseStudy) {
      throw new NotFoundException('Case study not found');
    }

    return caseStudy;
  }

  // UPDATE CASE-STUDY
  async update(id: string, dto: UpdateCaseStudyDto): Promise<CaseStudy> {
    const updated = await this.caseStudyModel.findByIdAndUpdate(id, dto, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      throw new NotFoundException('Case study not found');
    }

    return updated;
  }

  // DELETE CASE-STUDY
  async remove(id: string): Promise<CaseStudy> {
    const deleted = await this.caseStudyModel.findByIdAndDelete(id);

    if (!deleted) {
      throw new NotFoundException('Case study not found');
    }

    return deleted;
  }
}
