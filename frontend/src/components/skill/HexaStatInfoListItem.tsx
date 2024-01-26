const HexaStatInfoListItem = ({stat, score}: any) => {
  return (
    <li className="hexa-stat-item">
      <span className="hexa-stat-level">Lv.{stat.stat_level}</span>
      <span className="hexa-stat-name">{stat.stat_name} </span>
      <span>
        +{score}
        {stat.stat_name !== "공격력 증가" && stat.stat_name !== "주력 스탯 증가" && "%"}
      </span>
    </li>
  );
};
export default HexaStatInfoListItem;
