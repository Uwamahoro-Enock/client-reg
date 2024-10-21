import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserModule, UserSchema } from '../src/models/user.model';

@Module({
  imports: [
    // Use MongooseModule.forRoot() to establish the MongoDB connection
    MongooseModule.forRoot(
      'mongodb+srv://enockdev01:9ZSj0QkXhEMyRCzu@cluster0.as0jw.mongodb.net/Ironjils?retryWrites=true',
    ),
    MongooseModule.forFeature([{ name: UserModule.name, schema: UserSchema }]),
  ],
  providers: [UserService],
})
export class AppModule {}
