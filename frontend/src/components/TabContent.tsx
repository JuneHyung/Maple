import { useState } from "react"
import StatInfo from "./stat/StatInfo";
import HyperStatInfo from "./stat/HyperStatInfo";
import AbilityInfo from "./stat/AbilityInfo";
import EquipmentInfoArea from "./equipment/EquipmentInfoArea";
import UnionInfoArea from "./union/UnionInfoArea";
type TabStatus = 'stat' | 'equipment' | 'union'
const TabContent = ({ocid}: any) => {
  const [curStatus, setCurStatus] = useState<TabStatus>('stat');
  const statusList: TabStatus[] = ['stat', 'equipment', 'union'];
  const handleCurStatus = (status: TabStatus) =>{
    setCurStatus(status)
  }

  const Content = () => {
    switch(curStatus){
      case 'stat':
        return <>
        <UnionInfoArea ocid={ocid} />
        {/* <EquipmentInfoArea ocid={ocid}/> */}
          {/* <StatInfo ocid={ocid}/>
          <HyperStatInfo ocid={ocid}/>
          <AbilityInfo ocid={ocid} /> */}
        </>
      case 'equipment':
        return <HyperStatInfo ocid={ocid} />
      default:
        return null;
    }
    
  }

  return (
    <div>
      <ul>
        {
          statusList.map(status => <li key={status} onClick={()=>handleCurStatus(status)}>{status}</li>)
        }
      </ul>
      {Content()}
    </div>
  )
}
export default TabContent