import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { genres } from './genre.type';

@Schema()
export class Movie extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop([{ type: String, enum: genres }])
  genres: string[];

  @Prop({ required: true })
  releaseDate: Date;

  @Prop({ required: true })
  director: string;

  @Prop([{ type: String }])
  actors: string[];
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
