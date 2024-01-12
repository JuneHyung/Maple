import { useState } from "react";
import EquipmentInfoPage from "../pages/EquipmentInfoPage";
import UnionInfoPage from "../pages/UnionInfoPage";
import { BrowserRouter, Link, Route, Routes} from "react-router-dom";
import NoData from "./NoData";
import StatInfoPage from "../pages/StatInfoPage";
import BasicInfoList from "./stat/BasicInfoList";
import SkillInfoPage from "../pages/SkillInfoPage";
interface PathInfo {
  label: string;
  path: string;
}
type TabStatus = PathInfo[];
const TabContent = ({ ocid }: any) => {
  const [curStatus, setCurStatus] = useState<PathInfo>({ label: "스탯", path: "stat" });
  
  const statusList: TabStatus = [
    { label: "스탯", path: "stat" },
    { label: "스킬", path: "skill" },
    { label: "장비", path: "equipment" },
    { label: "유니온", path: "union" },
  ];
  const handleCurStatus = (status: PathInfo) => {
    setCurStatus(status);
  };


  return (
    <div className="tab-content">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
};
export default TabContent;
