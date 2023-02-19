import ImageAbout from '../ImagesAbout';
import ImagesAboutDeco from '../ImagesAboutDeco';
import ImgDecorationAbout from '../ImgAboutDecoration';
import PicAboutLeftDeco from '../PicAboutLeftDeco';

export default function AboutPage() {
  return (
    <main>
      <ImageAbout />
      <ImagesAboutDeco />
      <div className="div-color-grey">
        <h1 className="about-h1">About Tabú </h1> <br />
        <div className="div-different-People">
          <p className="paragraph-different-People">Different people</p>
        </div>
        <div className="div-different-genre">Different Genre</div>
        <p className="about-paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. <br /> It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="div-different-culture">
          <p className="paragraph-different-culture">Different culture</p>
        </div>
        <div className="div-different-sounds">
          <p>Different Sounds</p>
        </div>
      </div>
      <ImgDecorationAbout />
      <PicAboutLeftDeco />
    </main>
  );
}
