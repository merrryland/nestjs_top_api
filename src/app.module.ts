import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { AuthController } from './auth/auth.controller';
import { TopPageController } from './top-page/top-page.controller';

@Module({
  imports: [AuthModule, TopPageModule, ProductModule, ReviewModule],
  controllers: [AppController, AuthController, TopPageController],
  providers: [AppService],
})
export class AppModule {}
