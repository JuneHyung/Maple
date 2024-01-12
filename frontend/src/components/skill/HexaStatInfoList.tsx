import { useCallback, useEffect, useState } from "react";
import { HexaStatInfo, getCharacterHexaStat } from "../../api/skill";
import { calcHexaPlusScore } from "../../api/util";

const HexaStatInfoList = ({ ocid }: any) => {
  const [hexaStatInfoList, setHexaSkillInfoList] = useState<HexaStatInfo>(
    {} as HexaStatInfo
  );

  const getHexaStat = useCallback(async (targetOcid: string) => {
    try {
      const info = await getCharacterHexaStat(targetOcid);
      console.log(info);
      setHexaSkillInfoList(info);
    } catch (e) {
      setHexaSkillInfoList({} as HexaStatInfo);
      alert(e);
    }
  }, []);

  useEffect(() => {
    getHexaStat(ocid);
  }, [getHexaStat, ocid]);
  return (
    <ul className="hexa-stat-list">
      <h1 className="info-title">Hexa 스탯</h1>
      {hexaStatInfoList.character_hexa_stat_core &&
        hexaStatInfoList.character_hexa_stat_core.map((stat) => {
          return (
            <>
              <li className="hexa-stat-item main-stat-item">
                <p className="hexa-stat-level">Lv.{stat.main_stat_level} </p>
                <p className="hexa-stat-info">
                  <span>{stat.main_stat_name} </span>
                  <span>+0</span>
                </p>
              </li>
              <li className="hexa-stat-item">
                <span className="hexa-stat-level">
                  Lv.{stat.sub_stat_level_1}{" "}
                </span>
                <span>{stat.sub_stat_name_1} </span>
                <span>
                  {calcHexaPlusScore(
                    stat.sub_stat_level_1,
                    stat.sub_stat_name_1
                  )}{" "}
                </span>
              </li>
              <li className="hexa-stat-item">
                <span className="hexa-stat-level">
                  Lv.{stat.sub_stat_level_2}{" "}
                </span>
                <span>{stat.sub_stat_name_2} </span>
                <span>
                  {calcHexaPlusScore(
                    stat.sub_stat_level_2,
                    stat.sub_stat_name_2
                  )}{" "}
                </span>
              </li>
            </>
          );
        })}
    </ul>
  );
};

export default HexaStatInfoList;
