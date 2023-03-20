import dotenv from 'dotenv';
dotenv.config();

export const DATA_SOURCE = {
    chanId :  process.env.CHAIN_ID,
    constractAddress : process.env.CONSTRACT_ADDRESS,
}