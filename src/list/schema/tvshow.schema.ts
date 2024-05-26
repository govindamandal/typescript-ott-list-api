import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { genres } from './genre.type';

@Schema()
export class TVShow extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop([{ type: String, enum: genres }])
  genres: string[];

  @Prop([
    {
      episodeNumber: Number,
      seasonNumber: Number,
      releaseDate: Date,
      director: String,
      actors: [String],
    },
  ])
  episodes: Array<{
    episodeNumber: number;
    seasonNumber: number;
    releaseDate: Date;
    director: string;
    actors: string[];
  }>;
}

export const TVShowSchema = SchemaFactory.createForClass(TVShow);
