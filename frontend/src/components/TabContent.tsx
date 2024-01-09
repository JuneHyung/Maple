import { useState } from "react"
type TabStatus = 'stat' | 'equipment' | 'union'
const TabContent = () => {
  const [curStatus, setCurStatus] = useState<TabStatus>('stat');
  const statusList: TabStatus[] = ['stat', 'equipment', 'union'];
  const handleCurStatus = (status: TabStatus) =>{
    setCurStatus(status)
  }
  return (
    <div>
      <ul>
        {
          statusList.map(status => <li key={status} onClick={()=>handleCurStatus(status)}>{status}</li>)
        }
      </ul>
      <div>{curStatus}</div>
    </div>
  )
}
export default TabContent