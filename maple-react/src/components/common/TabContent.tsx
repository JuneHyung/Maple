import EquipmentInfoPage from '@/pages/EquipmentInfoPage';
import NotFoundPage from '@/pages/NotFoundPage';
import SkillInfoPage from '@/pages/SkillInfoPage';
import StatInfoPage from '@/pages/StatInfoPage';
import UnionArtifactPage from '@/pages/UnionArtifactPage';
import UnionInfoPage from '@/pages/UnionInfoPage';
import { Routes, Route, Link } from 'react-router-dom';
import BasicInfoList from '../stat/BasicInfoList';

const TabContent = () => {
  return (
    <div className="tab-content">
      <BasicInfoList />
      <nav>
        <li><Link to="/detail/stat">스탯</Link></li>
        <li><Link to="/detail/skill">스킬</Link></li>
        <li><Link to="/detail/equipment">장비</Link></li>
        <li><Link to="/detail/union">유니온</Link></li>
        <li><Link to="/detail/artifact">아티팩트</Link></li>
      </nav>
      <Routes>
        <Route path="/stat" element={<StatInfoPage />}></Route>
        <Route path="/skill" element={<SkillInfoPage />}></Route>
        <Route path="/equipment" element={<EquipmentInfoPage />}></Route>
        <Route path="/union" element={<UnionInfoPage />}></Route>
        <Route path="/artifact" element={<UnionArtifactPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
};

export default TabContent;
