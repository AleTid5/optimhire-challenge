import { Injectable } from '@nestjs/common';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userDocumentModel: Model<UserDocument>,
  ) {}

  findByUserId(userId: string): Promise<UserDocument> {
    return this.userDocumentModel.findOne({ _id: userId }).exec();
  }

  findByUsernameAndPassword(
    username: string,
    password: string,
  ): Promise<UserDocument> {
    return this.userDocumentModel.findOne({ username, password }).exec();
  }

  add({ username, password }): Promise<UserDocument> {
    return this.userDocumentModel.create({
      username,
      password,
    });
  }

  decrementLimit(userId: string): Promise<UpdateWriteOpResult> {
    return this.userDocumentModel
      .updateOne({ _id: userId }, { $inc: { limit: -1 } })
      .exec();
  }

  resetUsersLimit(): void {
    this.userDocumentModel
      .updateMany({ limit: { $lt: 10 } }, { limit: 10 })
      .exec();
  }
}
