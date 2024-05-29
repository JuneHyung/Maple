import { Ranking } from "../../api/rank";

type RankInfoListItemProps = {
  info: Ranking,
  idx: number,
  onClick: (character: Ranking) => void
}

const RankInfoListItem = ({info, idx, onClick}: RankInfoListItemProps) => {
  return (
    <li className="rank-info-item" key={info.character_name} onClick={() => onClick(info)}>
      <p className="rank-info-row">
        <span className="rank-number">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
      </p>
      <p className="rank-info-row">
        <span className="character-world-name">[{info.world_name}]</span>
        <span className="character-name">{info.character_name}</span>
      </p>
      <p className="rank-info-row">
        <span className="character-level">Lv.{info.character_level}</span>
        <span className="class-name">{info.sub_class_name || info.class_name}</span>
      </p>
      <p className="rank-info-row">
        <span className="character-popularity">인기도 : {info.character_popularity}</span>
      </p>
      <p className="rank-info-row">
        <span className="character-guild-name">길드 : {info.character_guildname ?? "없음"}</span>
      </p>
    </li>
  );
};
export default RankInfoListItem;
