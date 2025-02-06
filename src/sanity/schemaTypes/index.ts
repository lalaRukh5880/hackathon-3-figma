import { type SchemaTypeDefinition } from 'sanity';
import {chef} from './chefs';
import {food} from './foods';
import {order} from './order';
import { blog } from './blog';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food, chef,order,blog],
};