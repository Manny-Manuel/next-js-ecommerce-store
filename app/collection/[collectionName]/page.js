import Image from 'next/image';
import { NotFound } from 'next/navigation';
import { collection } from '../../../database/collection';
import CookiesBanner from '../../CookiesBanner';
import CreateButton from '../../CreateButton';

export default function CollectionHeadSetPage(props) {
  const singleHeadSet = collection.find((collectionHeadSet) => {
    return (
      collectionHeadSet.brandName.toLowerCase() === props.params.collectionName
    );
  });
  if (!singleHeadSet) {
    NotFound();
  }

  return (
    <main>
      <div className="div-singleHeadSet">
        <Image
          className="Images-singleHeadSet"
          src={`/images/${singleHeadSet.brandName}-${singleHeadSet.color}.jpg`}
          alt={singleHeadSet.type}
          width="220"
          height="220"
        />
        <h2 className="h2-margin-singleHeadSet">{singleHeadSet.brandName}</h2>
        <h5 className="price-singleHeadSet">{singleHeadSet.price}</h5>
        <div className="div-description-singleHeadSet">
          <h2 className="h4-description-singleHeadSet">
            {' '}
            Product Description:
            <br />
            {singleHeadSet.description}
            <br />
            {singleHeadSet.description}
          </h2>
        </div>
        <div className="button-cart-singleHeadSet">
          <h3>
            <span className="color-size-quantity-singleHeadSet">
              Color / size / Quantity
            </span>
            <br />
            <span className="add-cart">Add to cart</span> <CreateButton />
          </h3>
        </div>
      </div>
      <CookiesBanner />
    </main>
  );
}