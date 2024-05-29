type UnionRaiderListProps = {raider: string[]}
const UnionRaiderList = ({ raider }: UnionRaiderListProps) => {
  return (
    <ul className="union-info-content">
      {raider.map((info, idx) => (
        <li key={`${info}${idx}`} className="union-info-item union-info-value">
          {info}
        </li>
      ))}
    </ul>
  );
};

export default UnionRaiderList;
