export default function ProfileTitle(title) {
  const { text } = title;
  return (
    <div>
      {/* eslint-disable-next-line react/no-danger  */}
      <div
        className="profile__title"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
}
