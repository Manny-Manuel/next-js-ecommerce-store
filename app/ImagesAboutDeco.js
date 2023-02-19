import Image from 'next/image';

export default function ImagesAboutDeco() {
  return (
    <Image
      className="image-about-headphone-eyes"
      src="/about-image/people-headphone-eyes.jpg"
      width={400}
      height={400}
      alt="Picture of the author"
    />
  );
}
