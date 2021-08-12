import { getContentfulProfiles } from '../utils/contentful';
import ProfileCard from './ProfileCard';

export default function Profiles({ props }) {
  const dataContentful = getContentfulProfiles(props);
  const { profiles } = dataContentful;

  return (
    <div className="profile__container">
      {profiles.map((component) => (
        <ProfileCard
          key={component.fields.identifier}
          description={component.fields.cardDescription}
          image={component.fields.cardImage.fields.file.url}
          link={component.fields.cardLink}
          title={component.fields.cardTitle}
        />
      ))}
    </div>
  );
}
