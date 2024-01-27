type UnionRaiderStatListProps = {list: string[]};
const UnionRaiderStatList = ({list}: UnionRaiderStatListProps) => {
  return (
    <ul className="union-info-content">
    {list.map((info, idx) => (
      <p key={`${info}${idx}`} className="union-info-item union-info-value">
        {info}
      </p>
    ))}
    </ul>
  )
}
export default UnionRaiderStatList;