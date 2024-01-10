import AbilityInfoList from "../components/stat/AbilityInfoList";
import HyperStatInfoList from "../components/stat/HyperStatInfoList";
import StatInfoList from "../components/stat/StatInfoList";

const StatInfoPage = ({ocid}: any) => {
  return (
    <div className="stat-info-page">
      <StatInfoList ocid={ocid}/>
      <HyperStatInfoList ocid={ocid}/>
      <AbilityInfoList ocid={ocid}/>
    </div>
  )
}

export default StatInfoPage;