import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserRequest, CreateUserResponse } from './proto/user';
import { User, UserDocument } from '../src/schemas/user.schema';  // Import your User schema

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>, // Inject the Mongoose model
  ) {}

  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    const { username, password, age } = request;

    // Create a new user and save it to the MongoDB database
    const newUser = new this.userModel({
      username,
      password,
      age,
    });
    
    const savedUser = await newUser.save();  // This saves the user to MongoDB

    return { id: savedUser._id.toString(), message: `User ${username} created successfully` };  // Return MongoDB _id
  }
}