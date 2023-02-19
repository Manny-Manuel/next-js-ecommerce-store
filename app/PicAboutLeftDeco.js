import Image from 'next/image';

export default function PicAboutLeftDeco() {
  return (
    <Image
      className="image-about-kidHeadPhone"
      src="/about-image/kidHeadPhone.jpg"
      width={400}
      height={400}
      alt="Picture of the author"
    />
  );
}
