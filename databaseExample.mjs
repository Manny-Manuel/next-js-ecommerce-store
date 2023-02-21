import { config } from 'dotenv-safe'; // dotenv-safe protect our sensitive data like password, username, pgadming
import postgres from 'postgres';

// whenever we call{config}, this will call all the variable that
// are on our .env file... and we want this the first that happen whenever this file is call

config();

const sql = postgres();

console.log(
  await sql`
  SELECT * FROM collection

  `,
);

// this is just for example testing, cause this will most of the time
// run from next.js and next.js will take care of this
await sql.end();
