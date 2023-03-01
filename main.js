// main.js
import dotenv from 'dotenv-flow';

dotenv.config();

export function myFunction() {
  console.log(process.env.serviceID);
}
