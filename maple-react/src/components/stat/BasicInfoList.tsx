import { useCallback, useEffect, useState } from "react";
import { getCharacterBasic } from "@/api/stat";
import { divideNumberComma } from "@/api/util";
import { useUserStore } from "@/store/user";
import { BasicInfo } from "@/models/stat";

const BasicInfoList = () => {
  const {ocid} = useUserStore();
  const [basicInfo, setBasicInfo] = useState<BasicInfo>({} as BasicInfo);
  
  // ocid로 캐릭터의 기본정보를 조회
  const getBasicInfo = useCallback(async (targetOcid: string) => {
    try {
      const info = await getCharacterBasic(targetOcid);
      setBasicInfo(info);
    } catch (e) {
      setBasicInfo({} as BasicInfo);
      alert(e);
    }
  }, []);

  useEffect(() => {
    if(ocid.length>0) getBasicInfo(ocid);
  }, [getBasicInfo, ocid]);

  return (
    <div className="basic-info-list">
      <h1>기본 정보</h1>
      <div className="basic-info-content">
        <div className="basic-img-wrap">
          <div className="character-icon">
            <img src={basicInfo.character_image} alt="charc_img" />
          </div>
          <ul className="character-description">
            <li className="character-info-item">
              {basicInfo.character_name} ({basicInfo.character_gender === "여" ? "♀" : "♂"})
            </li>
            <li className="character-info-item">{basicInfo.world_name}</li>
            <li className="character-info-item">
              {basicInfo.character_class} ( {basicInfo.character_class_level}차 )
            </li>
            <li className="character-info-item">
              Lv. {basicInfo.character_level} {basicInfo.character_exp_rate}% ({divideNumberComma(basicInfo.character_exp)})
            </li>
            <li className="character-info-item">{basicInfo.character_guild_name} 길드</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default BasicInfoList;
