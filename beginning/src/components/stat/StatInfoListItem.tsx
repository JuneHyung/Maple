import { FinalStat } from "../../api/stat";

type StatInfoListItemProps = {stat: FinalStat};
const StatInfoListItem = ({ stat }: StatInfoListItemProps) => {
  return (
    <li key={`${stat.stat_name}${stat.stat_value}`} className="stat-info-item">
      <span className="stat-name">{stat.stat_name}</span>
      <span className="stat-value">{stat.stat_value}</span>
    </li>
  );
};
export default StatInfoListItem;
