import { UnionBlock } from "../../api/union";
import { divideCharacterType } from "../../api/util";

type UnionMemberListProps = {blocks: UnionBlock[]};
const UnionMemberList = ({blocks}: UnionMemberListProps) => {
  return (
    <ul className="union-info-content">
    {blocks.map((info, idx) => (
      <li key={`${info.block_type}${info.block_class}${info.block_level}${idx}`} className="union-info-item">
        <span className={`union-block-type ${divideCharacterType(info.block_type)}`}>[{info.block_type}]</span>
        <span className="union-block-class">{info.block_class}</span>
        <span className="union-block-level">Lv.{info.block_level}</span>
      </li>
    ))}
    </ul>
  )
}

export default UnionMemberList;