// this dotenv-safe when changed to ts need a type
// library  @types/dotenv-safe should be download in order that it work properly

import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

//  TESTING THE DATABASE DATA ON THE SERVER, ITEMS SHOULD BEEN SEEN ON THE SERVER NOT ON THE  BROWSER
//  HERE WE NEED TO CONVERT THE SELECT * FROM collection in JavaScript in order to be able to use them in te
// pages were we'are going to have the Items

// whenever we want to use a connection to this file, to retrieve the sql query we will need to to export here and inport it where we want to query it
export const sql = postgres({
  // this  argument passed to the postgres function tell the
  // program to change all the snake_case to camelCase
  transform: {
    ...postgres.camel,
    undefined: null,
  },
});
