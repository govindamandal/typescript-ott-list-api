import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Genre, genres } from './genre.type';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ type: [{ type: String, enum: genres }] })
  favoriteGenres: Genre[];

  @Prop({ type: [{ type: String, enum: genres }] })
  dislikedGenres: Genre[];

  @Prop([
    {
      contentId: { type: String, required: true },
      watchedOn: { type: Date, required: true },
      rating: { type: Number },
    },
  ])
  watchHistory: Array<{
    contentId: string;
    watchedOn: Date;
    rating?: number;
  }>;

  @Prop([{ type: String }])
  myList: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
