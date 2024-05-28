import { Routes, Route, Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { lazy, useCallback, useEffect } from 'react';


import { useUserStore } from '@/store/user';
import { getOcidByCharacterName } from '@/api/user';
import BasicInfoList from '@/components/stat/BasicInfoList';
const StatInfoPage = lazy(()=>import("@/pages/StatInfoPage"));
const SkillInfoPage = lazy(()=>import("@/pages/SkillInfoPage"));
const EquipmentInfoPage = lazy(()=>import("@/pages/EquipmentInfoPage"));
const UnionInfoPage = lazy(()=>import("@/pages/UnionInfoPage"));
const UnionArtifactPage = lazy(()=>import("@/pages/UnionArtifactPage"));
const NotFoundPage = lazy(()=>import("@/pages/NotFoundPage"));

const pathInfoList = [
  {path: 'stat', label: '스탯'},
  {path: 'skill', label: '스킬'},
  {path: 'equipment', label: '장비'},
  {path: 'union', label: '유니온'},
  {path: 'artifact', label: '아티팩트'},
]

const TabContent = () => {
  const {characterName} = useParams(); 
  const {ocid, setOcid, isEmptyOcid} = useUserStore();
  const location=useLocation().pathname.split('/');
  const nav = useNavigate();

  const initOcid = useCallback(async ()=>{
    if(characterName && isEmptyOcid()){
      try {
        const { ocid } = await getOcidByCharacterName(characterName);
        setOcid(ocid);
        nav(location.join('/'));
      } catch (e) {
        setOcid('');
      }
    }
  },[ocid])

  useEffect(()=>{
    initOcid();
  },[])

  return (
    <div className="tab-content">
      <BasicInfoList />
      <nav className='tab-list'>
        {pathInfoList.map(info=>(
          <li className={`${location[location.length-1]===info.path && "cur-active-item"} tab-item`} key={info.path}>
            <Link to={`/user/${characterName}/${info.path}`}>{info.label}</Link>
          </li>
        ))}
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
