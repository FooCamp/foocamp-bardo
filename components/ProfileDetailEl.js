import Image from './Image';

export default function ProfileDetail({ detail }) {
  const { description, images } = detail.fields;
  const { url } = images[0].fields.file;

  return (
    <article className="profile-detail-el">
      <Image
        url={url}
        classNameWrapper="profile-detail-el__w-img"
        className="profile-detail-el__img"
        alternativeText=""
        roleName="decorative"
      />
      <p className="profile-detail-el__text">{description}</p>
    </article>
  );
}
