import Image from 'next/image';

export default function ImagesAbout() {
  return (
    <Image
      className="image-headphones-men-ubahn"
      src="/about-image/headphones-men-ubahn.jpg"
      width={400}
      height={400}
      alt="Picture of the author"
    />
  );
}
