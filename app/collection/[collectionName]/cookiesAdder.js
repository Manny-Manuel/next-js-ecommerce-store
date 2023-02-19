'use client';

// Button for the shopping car
// logic
// collectionHeadSet = [{id: number, brandName: number}]

export default function CookiesAdder(props) {
  return (
    <div>
      <h3 className="cookies-adder-price-h2" style={{ color: 'grey' }}>
        {props.collectionHeadSet.price}
      </h3>
      <button className="cookies-bottom-2">-</button>
      <button className="cookies-bottom-1">+</button>
    </div>
  );
}
