import { Module } from '@nestjs/common';
import { DefaultModule } from './module/default/default.module';
import { AdminModule } from './module/admin/admin.module';
import { ApiModule } from './module/api/api.module';
import { ToolsService } from './service/tools/tools.service';

@Module({
  imports: [DefaultModule, AdminModule, ApiModule],
  controllers: [],
  providers: [ToolsService],
})
export class AppModule {}
