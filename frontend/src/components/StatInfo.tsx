import { useEffect, useState } from "react";
import { getCharacterBasic } from "../api/stat";

interface StatInfoProps {
  ocid: string
}
const StatInfo= ({ocid}: any) => {
  const [statInfo, setStatInfo] = useState({})
  useEffect(()=>{
    if(ocid){
      setStatInfo(getCharacterBasic(ocid));
    }
  },[ocid])
  return (<div>StatInfo</div>);
}

export default StatInfo;