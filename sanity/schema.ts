import { type SchemaTypeDefinition } from 'sanity'
import post from './post';
import user from './user';
import comment from './comment';
import postedBy from './postedBy';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ post,
    user,
    comment,
    postedBy,],
}
