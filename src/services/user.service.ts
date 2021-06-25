import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userDocumentModel: Model<UserDocument>,
  ) {}

  async findOne(username: string, password: string): Promise<UserDocument> {
    return this.userDocumentModel.findOne({ username, password }).exec();
  }

  add({ username, password }): Promise<UserDocument> {
    return this.userDocumentModel.create({
      username,
      password,
    });
  }
}
