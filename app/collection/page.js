import Image from 'next/image';
import { Fragment } from 'react';
import CreateButton from '../CreateButton';

const collection = [
  { id: 1, brand: 'Apple', type: 'Headphone', color: 'Pink', price: 140 },
  { id: 2, brand: 'Apple', type: 'Headphone', color: 'white', price: 140 },
  { id: 3, brand: 'Apple', type: 'Headphone', color: 'Silver', price: 140 },
];

export default function CollectionPage() {
  return (
    <>
      <h1>Winter collection</h1>
      <main>
        {collection.map((collection) => {
          return (
            <Fragment key={collection.id}>
              <Image
                src={`/images-apple/${collection.brand}-${collection.id}.jpg}`}
                alt={collection.type}
                width="200"
                height="200"
              />
              <h2 key={collection.id}>{collection.brand}</h2>
            </Fragment>
          );
        })}
        <CreateButton /> <br />
        Collection
      </main>
    </>
  );
}
