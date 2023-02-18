import Image from 'next/image';

export default function CollectionItem() {
  return (
    <div className="girl-head-down">
      <Image
        src="/img-jpeg/girl-head-down.jpg"
        width={290}
        height={355}
        alt="Picture of the author"
      />
    </div>
  );
}
