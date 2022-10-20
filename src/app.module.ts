import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://personalerickcintra:kUnbGVqlDRmPdddE@cluster0.kki4gtx.mongodb.net/test'),UsersModule],

})
export class AppModule {}
