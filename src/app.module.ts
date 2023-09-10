import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { WhereController } from './controllers/where.controller';
import { WhereService } from './services/where.service';
import { FindCController } from './controllers/FindC.controller';
import { FindCService } from './services/FindC.service';
import { SearchForCEPController } from './controllers/SearchForCEP.controller';
import { SearchForCEPService } from './services/SearchForCEP.service';

@Module({
  imports: [],
  controllers: [AppController, WhereController, FindCController, SearchForCEPController],
  providers: [AppService, WhereService, FindCService, SearchForCEPService],
})
export class AppModule {}
