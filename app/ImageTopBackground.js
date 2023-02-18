import Image from 'next/image';

export default function ImageTopBackground() {
  return (
    <div className="boy-headphone">
      <Image
        src="/img-jpeg/boy-headphone.jpg"
        width={293}
        height={350}
        alt="Picture of the author"
      />
    </div>
  );
}
