const HyperStatInfoListItem = ({ stat, idx }: any) => {
  return (
    <li key={`preset${idx + 1}${stat.stat_type}`} className="stat-info-item">
      <span className="stat-name">{stat.stat_type} </span>
      <span className="stat-value">{stat.stat_level}</span>
      {stat.stat_level !== 0 && <p className="stat-description">{stat.stat_increase}</p>}
    </li>
  );
};
export default HyperStatInfoListItem;
