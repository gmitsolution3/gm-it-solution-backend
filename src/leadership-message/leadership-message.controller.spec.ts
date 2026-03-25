import { Test, TestingModule } from '@nestjs/testing';
import { LeadershipMessageController } from './leadership-message.controller';
import { LeadershipMessageService } from './leadership-message.service';

describe('LeadershipMessageController', () => {
  let controller: LeadershipMessageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeadershipMessageController],
      providers: [LeadershipMessageService],
    }).compile();

    controller = module.get<LeadershipMessageController>(LeadershipMessageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
