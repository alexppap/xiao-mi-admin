import { Controller, Get } from '@nestjs/common';

@Controller('admin/manager')
export class ManagerController {
    @Get()
    index() {
      return '这是admin管理员页';
    }
}
