import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from '../user/user.controller';
import { UserService } from '../user.service';
import { User, UserSchema } from '../schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), // Register the User schema
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
