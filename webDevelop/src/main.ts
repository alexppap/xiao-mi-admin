import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 配置静态目录
  app.useStaticAssets(join(__dirname, '..', 'public'), { prefix: '/static/' });
  // 配置模板引擎
  app.setBaseViewsDir('views');
  app.setViewEngine('ejs');
  // 设置cookie
  app.use(cookieParser('this signed cookies'));
  // 设置session
  app.use(
    session({
      secret: '12345',
      name: 'name',
      cookie: { maxAge: 21900, httpOnly: true },
      resave: true,
      saveUninitialized: true,
      rolling: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
