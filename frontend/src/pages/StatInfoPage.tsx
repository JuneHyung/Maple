import AbilityInfoList from "../components/stat/AbilityInfoList";
import HyperStatInfoList from "../components/stat/HyperStatInfoList";
import StatInfoList from "../components/stat/StatInfoList";

const StatInfoPage = ({ocid}: any) => {
  return (
    <div className="stat-info-page">
      <div>
        <StatInfoList ocid={ocid}/>
        <AbilityInfoList ocid={ocid}/>
      </div>
      <HyperStatInfoList ocid={ocid}/>
    </div>
  )
}

export default StatInfoPage;