import { useCallback, useEffect, useState } from "react";
import { getCharacterUnion, getCharacterUnionRaider } from "../api/union";
import UnionTable from "../components/union/UnionTable";
import UnionInfoListContainer from "../components/union/UnionInfoContainer";
import { useUserStore } from "@/store/user";
import { UnionInfo, UnionRaiderInfo } from "@/models/union";

const UnionInfoPage = () => {
  const {ocid} = useUserStore();
  const [unionInfo, setUnionInfo] = useState({} as UnionInfo);
  const [unionRaiderInfo, setUnionRaiderInfo] = useState({} as UnionRaiderInfo);

  // ocid로 캐릭터의 유니온 정보 조회
  const getUnionInfo = useCallback(async (targetOcid: string) => {
    try {
      const info = await getCharacterUnion(targetOcid);
      setUnionInfo(info);
    } catch (e) {
      setUnionInfo({} as UnionInfo);
      alert(e);
    }
  }, []);

  // ocid로 캐릭터의 공격대 정보 조회
  const getUnionRaiderInfo = useCallback(async (targetOcid: string) => {
    try {
      const info = await getCharacterUnionRaider(targetOcid);
      setUnionRaiderInfo(info);
    } catch (e) {
      setUnionRaiderInfo({} as UnionRaiderInfo);
      alert(e);
    }
  }, []);

  useEffect(() => {
    if(ocid.length>0){
      getUnionInfo(ocid);
      getUnionRaiderInfo(ocid);
    }
  }, [getUnionInfo, getUnionRaiderInfo, ocid]);

  return (
    <div className="union-info-page">
      <div className="union-info-list">
        <ul className="union-info-content">
          {unionInfo.hasOwnProperty("union_level") ? (
            <>
              <li className="union-info-item">
                <span className="union-info-name">유니온 레벨 </span> <span className="union-info-value">{unionInfo.union_level} </span>
              </li>
              <li className="union-info-item">
                <span className="union-info-name"> 유니온 등급 </span> <span className="union-info-value">{unionInfo.union_grade}</span>
              </li>
            </>
          ) : (
            <li>없음</li>
          )}

          <div className="union-table-wrap">
            <UnionTable info={unionRaiderInfo} />
          </div>
          <UnionInfoListContainer title="유니온 공격대 점령 효과" unionRaiderInfo={unionRaiderInfo} name="union_occupied_stat" />
        </ul>
      </div>
      <UnionInfoListContainer title="유니온 Member" unionRaiderInfo={unionRaiderInfo} name="union_block" />
      <UnionInfoListContainer title="유니온 공격대원 효과" unionRaiderInfo={unionRaiderInfo} name="union_raider_stat" />
    </div>
  );
};
export default UnionInfoPage;
