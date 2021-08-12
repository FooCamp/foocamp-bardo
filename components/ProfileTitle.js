export default function ProfileTitle(text) {
  const { title } = text;
  return (
    <div>
      {/* eslint-disable-next-line react/no-danger  */}
      <div
        className="profile__title"
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );
}
