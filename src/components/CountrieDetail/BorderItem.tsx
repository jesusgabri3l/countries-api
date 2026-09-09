import { useNavigate } from 'react-router-dom';

interface Props {
  name: string;
  code: string;
}

export default function BorderItem({ name, code }: Props) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="borderItem"
      onClick={() => navigate(`/${code.toLowerCase()}`)}
    >
      <span className="borderItem__text">{name}</span>
    </button>
  );
}
