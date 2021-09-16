import Button from './Button';
import ProfileTitle from './ProfileTitle';

export default function Card({
  title, description, link, image, buttontext,
}) {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <article className="profile">
      <div className="profile__image">
        <img src={image} alt="" />
      </div>
      <ProfileTitle text={title} />
      <div className="profile__description">{description}</div>
      <Button
        containerStyle="profile__button"
        buttonstyle="button button--primary"
        onclick={() => openInNewTab(link)}
        text={buttontext}
      />
    </article>
  );
}
