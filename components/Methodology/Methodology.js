import { getContentfulMethodologyData } from '../../utils/contentful';
import MethodologyTitle from '../Hero/HeroTitle';
import MethodologyBody from '../Hero/HeroBody';
import Image from '../Image';
import Container from '../Container';

export default function Methodology({ data }) {
  const methodologyData = getContentfulMethodologyData(data);
  const { sectionTitle, sectionDescription, sectionImages } = methodologyData;

  return (
    <section className="methodology">
      <Container className="methodology__container">
        <div className="methodology__container-child">
          <MethodologyTitle
            className="hero__title--child"
            classNameWrapper="methodology__title-wrapper"
          >
            {sectionTitle}
          </MethodologyTitle>
        </div>
        <div className="methodology__container-child">
          <MethodologyBody
            className="hero__body--child"
            classNameWrapper="methodology__body-wrapper"
          >
            {sectionDescription}
          </MethodologyBody>
        </div>
        <div className="methodology__container-child">
          <div className="methodology__images-wrapper">
            {sectionImages.map((component) => (
              <Image
                key={component.fields.title}
                url={component.fields.file.url}
                roleName="decorative"
                className="methodology__image"
                classNameWrapper="methodology__image-wrapper"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
