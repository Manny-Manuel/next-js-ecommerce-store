import Image from 'next/image';

export default function ImageLogo() {
  return (
    <Image
      class="center"
      src="/logo.png"
      width={100}
      height={100}
      alt="Picture of the author"
    />
  );
}
