// import fs from 'node:fs';
import { sql } from './connect';

export const collectionItems = [
  {
    id: 1,
    brandName: 'Apple-black',
    type: 'Headphone',
    color: 'Black',
    description: '𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵,𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵',
    price: '339.99$',
  },
  {
    id: 2,
    brandName: 'Apple-Green',
    type: 'Headphone',
    color: 'Green',
    description: '𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵,𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵',
    price: '339.99$',
  },
  {
    id: 3,
    brandName: 'Apple-Pink-Red',
    type: 'Headphone',
    color: 'Red',
    description: '𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵, 𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵',
    price: '349.99$',
  },

  {
    id: 4,
    brandName: 'Cat-Headset',
    type: 'Headphone',
    color: 'Silver',
    description: '𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵, 𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵',
    price: '149.99$',
  },
  {
    id: 5,
    brandName: 'Cat-Headset',
    type: 'Headphone',
    color: 'Pink',
    description: '𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵, 𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵',
    price: '149.99$',
  },
  {
    id: 6,
    brandName: 'Cat-Headset',
    type: 'Headphone',
    color: 'White',
    description: '𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵, 𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵',
    price: '159.99$',
  },
  {
    id: 7,
    brandName: 'P9-Bluetooth',
    type: 'Headphone',
    color: 'White-Green',
    description: '𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵, 𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵',
    price: '349.99$',
  },
  {
    id: 8,
    brandName: 'P9-Bluetooth',
    type: 'Headphone',
    color: 'Pink-Red',
    description: '𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵, 𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵',
    price: '245.99$',
  },
  {
    id: 9,
    brandName: 'P9-Bluetooth',
    type: 'Headphone',
    color: 'Pure-White',
    description: '𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵, 𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵',
    price: '239.99$',
  },
  {
    id: 10,
    brandName: 'P9-Bluetooth',
    type: 'Headphone',
    color: 'Pure-Black',
    description: '𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵,𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵',
    price: '245.99$',
  },
  {
    id: 11,
    brandName: 'Montblanc-Black',
    type: 'Headphone',
    color: 'Black',
    description: '𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵,𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵',
    price: '489.16$',
  },
  {
    id: 12,
    brandName: 'Montblanc-White',
    type: 'Headphone',
    color: 'White',
    description: '𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵,𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵',
    price: '479.16$',
  },
];

// testing to see if the connection have been successful
/*
console.log(
  sql`
  SELECT * FROM collection

  `.then((data) => console.log(data)),
);

// this function bellow will allow us to export the items from the collection and be able to use it
// this function is always Async that why it has to be alway awaited at the start calling of sql
// we should remember that this type of data happen asynchronous which means one thing after the other

*/
export async function getCollection() {
  const collection = await sql`
  SELECT * FROM collection

  `;
  return collection;
}
