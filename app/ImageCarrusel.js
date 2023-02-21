import Image from 'next/image';
import Link from 'next/link';
import { getCollection } from '../database/collection';

export default async function ImageCarrusel() {
  const collection = await getCollection();
  return (
    <main>
      {collection.map((carrusel) => {
        return (
          <div id="div-carrusel" key={carrusel.id}>
            <Image
              className="Images-grp-carrusel"
              src={`/images/${carrusel.brandName}-${carrusel.color}.jpg`}
              alt={carrusel.type}
              width="100"
              height="100"
            />

            <h2 className="h2-margin-carrusel ">{carrusel.brandName}</h2>
          </div>
        );
      })}
    </main>
  );
}
