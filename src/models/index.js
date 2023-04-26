// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Output, Points, Item, Fuel, Electricity, Transport, RawMaterials, Processes, Logistics, Basket, Materials } = initSchema(schema);

export {
  Output,
  Points,
  Item,
  Fuel,
  Electricity,
  Transport,
  RawMaterials,
  Processes,
  Logistics,
  Basket,
  Materials
};