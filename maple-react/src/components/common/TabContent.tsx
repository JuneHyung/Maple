import { Routes, Route, Link, useParams } from 'react-router-dom';
import { lazy } from 'react';

import BasicInfoList from '../stat/BasicInfoList';
const StatInfoPage = lazy(()=>import("@/pages/StatInfoPage"));
const SkillInfoPage = lazy(()=>import("@/pages/SkillInfoPage"));
const EquipmentInfoPage = lazy(()=>import("@/pages/EquipmentInfoPage"));
const UnionInfoPage = lazy(()=>import("@/pages/UnionInfoPage"));
const UnionArtifactPage = lazy(()=>import("@/pages/UnionArtifactPage"));
const NotFoundPage = lazy(()=>import("@/pages/NotFoundPage"));

const TabContent = () => {
  const {characterName} = useParams(); 

  return (
    <div className="tab-content">
      <BasicInfoList />
      <nav className='tab-list'>
        <li className='tab-item'><Link to={`/user/${characterName}/stat`}>스탯</Link></li>
        <li className='tab-item'><Link to={`/user/${characterName}/skill`}>스킬</Link></li>
        <li className='tab-item'><Link to={`/user/${characterName}/equipment`}>장비</Link></li>
        <li className='tab-item'><Link to={`/user/${characterName}/union`}>유니온</Link></li>
        <li className='tab-item'><Link to={`/user/${characterName}/artifact`}>아티팩트</Link></li>
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
