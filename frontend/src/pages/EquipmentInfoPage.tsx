import PageMeta from "../components/PageMeta";
import { CommonProps } from "../components/TabContent";
import CashEquipmentInfoList from "../components/equipment/CashEquipmentList";
import EquipmentInfoList from "../components/equipment/EquipmentList";

const EquipmentInfoPage = ({ ocid }: CommonProps) => {
  return (
    <div className="equipment-info-page">
      <PageMeta title="장비 정보 조회" desc="장착 장비, 캐시 아이템 정보조회"/>
      <EquipmentInfoList ocid={ocid} />
      <CashEquipmentInfoList ocid={ocid} />
    </div>
  );
};

export default EquipmentInfoPage;
