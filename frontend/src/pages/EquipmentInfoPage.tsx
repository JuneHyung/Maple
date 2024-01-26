import CashEquipmentInfoList from "../components/equipment/CashEquipmentList";
import EquipmentInfoList from "../components/equipment/EquipmentList";

const EquipmentInfoPage = ({ ocid }: any) => {
  return (
    <div className="equipment-info-page">
      <EquipmentInfoList ocid={ocid} />
      <CashEquipmentInfoList ocid={ocid} />
    </div>
  );
};

export default EquipmentInfoPage;
