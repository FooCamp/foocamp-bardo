import { useRouter } from 'next/router';
import Button from './Button';
import ProfileTitle from './ProfileTitle';
import { openInCurrentTab } from '../utils/window';

export default function Card({
  title, description, link, image, buttontext,
}) {
  const router = useRouter();

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
        onclick={() => openInCurrentTab(link, router)}
        text={buttontext}
      />
    </article>
  );
}
