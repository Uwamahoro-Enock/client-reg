import { Module } from '@nestjs/common';
import mongoose from 'mongoose';

@Module({
  providers: [],  // You can add database-related providers here if needed.
})
export class DatabaseModule {
  constructor() {
    mongoose.connect(
      'mongodb+srv://enockdev01:9ZSj0QkXhEMyRCzu@cluster0.as0jw.mongodb.net/Ironjils?retryWrites=true',
    );
    mongoose.connection.once('open', () => {
      console.log('Connected to the database');
    });
  }
}
