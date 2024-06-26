import { AbilityInfoItem } from "../../api/stat";
import { GradeClass } from "../../api/util";

type AbilityInfoListItemProps = {ability: AbilityInfoItem, grade: GradeClass}
const AbilityInfoListItem = ({ ability, grade }: AbilityInfoListItemProps) => {
  return (
    <li key={`${ability.ability_no}`} className={`ability-info-item ${grade}`}>
      <span>[ {ability.ability_grade} ] </span>
      <span>{ability.ability_value}</span>
    </li>
  );
};
export default AbilityInfoListItem;
