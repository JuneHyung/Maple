import { useCallback, useEffect, useState } from "react";
import { HyperStat, getCharacterHyperStat } from "../../api/stat";

const initialState = {
  hyper_stat_preset_1: [
    {
      stat_type: "",
      stat_point: 0,
      stat_level: 0,
      stat_increase: "",
    },
  ],
  hyper_stat_preset_1_remain_point: 0,
  hyper_stat_preset_2: [
    {
      stat_type: "",
      stat_point: 0,
      stat_level: 0,
      stat_increase: "",
    },
  ],
  hyper_stat_preset_2_remain_point: 0,
  hyper_stat_preset_3: [
    {
      stat_type: "",
      stat_point: 0,
      stat_level: 0,
      stat_increase: "",
    },
  ],
  hyper_stat_preset_3_remain_point: 0,
};

const HyperStatInfoList = ({ ocid }: any) => {
  const [hyperStatInfo, setHyperStatInfo] = useState<HyperStat>(initialState);
  const getHyperStatInfo = useCallback(async (targetOcid: string) => {
    try {
      const info = await getCharacterHyperStat(targetOcid);
      const {
        hyper_stat_preset_1,
        hyper_stat_preset_1_remain_point,
        hyper_stat_preset_2,
        hyper_stat_preset_2_remain_point,
        hyper_stat_preset_3,
        hyper_stat_preset_3_remain_point,
      } = info;
      setHyperStatInfo({
        hyper_stat_preset_1,
        hyper_stat_preset_1_remain_point,
        hyper_stat_preset_2,
        hyper_stat_preset_2_remain_point,
        hyper_stat_preset_3,
        hyper_stat_preset_3_remain_point,
      });
    } catch (e) {
      setHyperStatInfo(initialState);
      alert(e);
    }
  }, []);

  useEffect(() => {
    getHyperStatInfo(ocid);
  }, [getHyperStatInfo, ocid]);

  return (
    <div className="stat-info">
      <ul className="stat-info-list">
        <h1 className="info-title">하이퍼 스탯</h1>
        <p>남은 포인트 : {hyperStatInfo.hyper_stat_preset_1_remain_point}</p>
        {hyperStatInfo.hasOwnProperty("hyper_stat_preset_1_remain_point") ? (
          hyperStatInfo.hyper_stat_preset_1.map((stat, idx) => (
            <>
              <li
                key={`preset${idx + 1}${stat.stat_type}`}
                className="stat-info-item"
              >
                <span className="stat-name">{stat.stat_type} </span>
                <span className="stat-value">{stat.stat_level}</span>
                {stat.stat_level !== 0 && (
                  <p className="stat-description">{stat.stat_increase}</p>
                )}
              </li>
            </>
          ))
        ) : (
          <li>없음</li>
        )}
      </ul>
    </div>
  );
};

export default HyperStatInfoList;
