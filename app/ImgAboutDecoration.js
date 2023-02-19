import Image from 'next/image';

export default function ImgDecorationAbout() {
  return (
    <Image
      className="image-about-woman-smiling"
      src="/about-image/woman-smiling.jpg"
      width={400}
      height={400}
      alt="Picture of the author"
    />
  );
}
