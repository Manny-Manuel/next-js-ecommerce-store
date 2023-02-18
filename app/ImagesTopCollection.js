import Image from 'next/image';

export default function CollectionItem() {
  return (
    <div className="woman-iphone-hand">
      <Image
        src="/img-jpeg/woman.jpg"
        width={290}
        height={350}
        alt="Picture of the author"
      />
    </div>
  );
}
