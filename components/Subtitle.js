export default function Subtitle({ children }) {
  return (
    <h4 className="subtitle">
      {/* eslint-disable-next-line react/no-danger  */}
      <div dangerouslySetInnerHTML={{ __html: children }} />
    </h4>
  );
}
