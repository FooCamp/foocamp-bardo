import { getContentfulProfiles } from '../utils/contentful';
import ProfileCard from './ProfileCard';
import Title from './Title';
import Subtitle from './Subtitle';
import Container from './Container';
import Stamp from './Stamp';

export default function Profiles(props) {
  const dataContentful = getContentfulProfiles(props);
  const { sectionComponents, sectionTitle, sectionDescription } = dataContentful;

  return (
    <section className="profiles">
      <div className="line" />
      <Container className="profiles__header">
        <div className="profiles__title">
          <div className="profiles__stamp">
            <Stamp position="left" />
          </div>
          <Title data={sectionTitle} />
        </div>
        <div className="profiles__subtitle">
          <Subtitle data={sectionDescription} />
        </div>
      </Container>

      <Container className="profile__container">
        {sectionComponents.map((component) => (
          <ProfileCard
            key={component.fields.identifier}
            description={component.fields.cardDescription}
            image={component.fields.cardImage.fields.file.url}
            link={component.fields.cardComponents.fields.buttonLink}
            title={component.fields.cardTitle}
            buttontext={component.fields.cardComponents.fields.buttonText}
          />
        ))}
      </Container>
    </section>
  );
}
