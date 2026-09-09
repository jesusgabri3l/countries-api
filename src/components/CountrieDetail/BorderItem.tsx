export default function BorderItem({ name }: { name: string }) {
  return (
    <div className="borderItem">
      <p className="borderItem__text">{name}</p>
    </div>
  );
}