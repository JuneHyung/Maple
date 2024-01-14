import { useEffect, useState } from "react";
import EquipmentInfoPage from "../pages/EquipmentInfoPage";
import UnionInfoPage from "../pages/UnionInfoPage";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import NoData from "./NoData";
import StatInfoPage from "../pages/StatInfoPage";
import BasicInfoList from "./stat/BasicInfoList";
import SkillInfoPage from "../pages/SkillInfoPage";
import RankInfoPage from "../pages/RankInfoPage";
interface PathInfo {
  label: string;
  path: string;
}
type TabStatus = PathInfo[];
const TabContent = ({ ocid, handleOCID, setCharacterName }: any) => {
  const [curStatus, setCurStatus] = useState<PathInfo>({ label: "", path: "" });

  const statusList: TabStatus = [
    { label: "스탯", path: "stat" },
    { label: "스킬", path: "skill" },
    { label: "장비", path: "equipment" },
    { label: "유니온", path: "union" },
  ];
  const handleCurStatus = (status: PathInfo) => {
    setCurStatus(status);
  };

  const nav = useNavigate();
  useEffect(()=>{
    if(ocid.length!==0) nav('stat')
  },[])

  return (
    <div className="tab-content">
        {ocid.length === 0 ? (
          <Routes>
            <Route path="/" element={<RankInfoPage handleOCID={handleOCID}  setCharacterName={setCharacterName}/>} />
          </Routes>
        ) : (
          <>
            <BasicInfoList ocid={ocid} />
            <ul className="tab-list">
              {statusList.map((status) => (
                <li key={status.path} className={`${curStatus.path === status.path && "cur-active-item"} tab-item`}>
                  <Link to={`${status.path}`} onClick={() => handleCurStatus(status)}>
                    {status.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Routes>
              <Route path="/stat" element={<StatInfoPage ocid={ocid} />} />
              <Route path="/skill" element={<SkillInfoPage ocid={ocid} />} />
              <Route path="/equipment" element={<EquipmentInfoPage ocid={ocid} />} />
              <Route path="/union" element={<UnionInfoPage ocid={ocid} />} />
              <Route path="*" element={<NoData />} />
            </Routes>
          </>
        )}
    </div>
  );
};
export default TabContent;
