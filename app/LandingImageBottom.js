import Image from 'next/image';

export default function LandingImageBottom() {
  return (
    <Image
      className="landing-image-bottom"
      src="/landingImageBottom.jpg"
      width={1280}
      height={799}
      alt="Picture of the author"
    />
  );
}
