import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { collection } from '../../database/collection';
import CreateButton from '../CreateButton';
import ImagesBackground from '../ImagesBackground';
import ImagesTopCollection from '../ImagesTopCollection';
import ImagesTopCollectionRight from '../ImagesTopCollectionRight';
import ImageTopBackground from '../ImageTopBackground';

export default function CollectionPage() {
  return (
    <>
      <div className="Image-Background-collection">
        <ImagesTopCollection />
        <ImagesBackground />
        <ImagesTopCollectionRight />
        <ImageTopBackground />
      </div>

      <h1 className="collection">Collection</h1>

      <main>
        {collection.map((collections) => {
          return (
            <div className="div-collection" key={collection.id}>
              <Link href={`/collection/${collections.brandName.toLowerCase()}`}>
                {' '}
                <Image
                  className="Images-grp"
                  src={`/images/${collections.brandName}-${collections.color}.jpg`}
                  alt={collections.type}
                  width="200"
                  height="200"
                />
              </Link>

              <h2 className="h2-margin">{collections.brandName}</h2>
              <h5 className="price">{collections.price}</h5>
              <h4 className="h4-description">{collections.description}</h4>

              <div className="button-cart">
                <h3>
                  <span className="add-cart">Add to cart</span> <CreateButton />
                </h3>
              </div>
            </div>
          );
        })}

        <h1 className="collection-bottom">Collection</h1>
      </main>
    </>
  );
}
