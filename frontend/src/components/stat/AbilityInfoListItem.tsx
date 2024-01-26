const AbilityInfoListItem = ({ ability, grade }: any) => {
  return (
    <li key={`${ability.ability_no}`} className={`ability-info-item ${grade}`}>
      <span>[ {ability.ability_grade} ] </span>
      <span>{ability.ability_value}</span>
    </li>
  );
};
export default AbilityInfoListItem;
