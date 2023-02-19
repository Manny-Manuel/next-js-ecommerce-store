import Image from 'next/image';

export default function ImagesBackground() {
  return (
    <Image
      src="/img-jpeg/beautiful.jpg"
      width={290}
      height={350}
      alt="Picture of the author"
    />
  );
}
