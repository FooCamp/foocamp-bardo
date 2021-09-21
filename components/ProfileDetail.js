import { getContentfulProfileDetail } from '../utils/contentful';
import Title from './Title';
import Container from './Container';
import ProfileDetailEl from './ProfileDetailEl';

export default function ProfileDetail({ data }) {
  const detailData = getContentfulProfileDetail(data);
  const { sectionTitle, sectionComponents } = detailData;

  return (
    <>
      <div className="line" />
      <section className="profile-detail">
        <Container className="profile-detail__content">
          <div className="profile-detail__header">
            <Title data={sectionTitle} className="profile-detail__title" />
          </div>
          <div className="profile-detail__list">
            {sectionComponents.map((detail) => (
              <ProfileDetailEl detail={detail} key={detail.fields.identifier} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
