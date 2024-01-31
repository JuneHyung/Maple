import { Suspense, lazy, useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import NoData from "./NoData";
import BasicInfoList from "./stat/BasicInfoList";

interface PathInfo {
  label: string;
  path: string;
}
type TabStatus = PathInfo[];

// 컴포넌트 지연로딩
const StatInfoPage = lazy(() => import("../pages/StatInfoPage"));
const SkillInfoPage = lazy(() => import("../pages/SkillInfoPage"));
const RankInfoPage = lazy(() => import("../pages/RankInfoPage"));
const EquipmentInfoPage = lazy(() => import("../pages/EquipmentInfoPage"));
const UnionInfoPage = lazy(() => import("../pages/UnionInfoPage"));
const RedirectPage = lazy(() => import("../pages/RedirectPage"));

const statusList: TabStatus = [
  { label: "스탯", path: "stat" },
  { label: "스킬", path: "skill" },
  { label: "장비", path: "equipment" },
  { label: "유니온", path: "union" },
];
export type TabContentProps = {
  ocid: string;
  handleOCID: (character_name: string) => Promise<void>;
  setCharacterName: React.Dispatch<React.SetStateAction<string>>;
};
export type CommonProps = Pick<TabContentProps, "ocid">;

const TabContent = ({ ocid, handleOCID, setCharacterName }: TabContentProps) => {
  const [curStatus, setCurStatus] = useState<PathInfo>({ label: "스탯", path: "stat" });

  // 현재 선택된 tab상태 초기화
  useEffect(()=>{
    setCurStatus({ label: "스탯", path: "stat" })
  },[])

  return (
    <div className="tab-content">
      {ocid.length === 0 ? (
        <Routes>
          <Route path="/" element={<RankInfoPage handleOCID={handleOCID} setCharacterName={setCharacterName} />} />
          <Route path="*" element={<RedirectPage path="/" />} />
        </Routes>
      ) : (
        <>
          <BasicInfoList ocid={ocid} />
          <ul className="tab-list">
            {statusList.map((status) => (
              <li key={status.path} className={`${curStatus.path === status.path && "cur-active-item"} tab-item`}>
                <Link to={`${status.path}`} onClick={() => setCurStatus(status)}>
                  {status.label}
                </Link>
              </li>
            ))}
          </ul>

          <Suspense fallback={<div>Loading....</div>}>
            <Routes>
              <Route path="/" element={<RedirectPage path="/stat" />} />
              <Route path="/stat" element={<StatInfoPage ocid={ocid} />} />
              <Route path="/skill" element={<SkillInfoPage ocid={ocid} />} />
              <Route path="/equipment" element={<EquipmentInfoPage ocid={ocid} />} />
              <Route path="/union" element={<UnionInfoPage ocid={ocid} />} />
              <Route path="*" element={<NoData />} />
            </Routes>
          </Suspense>
        </>
      )}
    </div>
  );
};
export default TabContent;
