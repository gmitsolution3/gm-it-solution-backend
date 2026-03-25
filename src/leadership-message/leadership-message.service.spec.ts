import { Test, TestingModule } from '@nestjs/testing';
import { LeadershipMessageService } from './leadership-message.service';

describe('LeadershipMessageService', () => {
  let service: LeadershipMessageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeadershipMessageService],
    }).compile();

    service = module.get<LeadershipMessageService>(LeadershipMessageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
