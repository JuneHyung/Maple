import CashEquipmentInfoList from "../components/equipment/CashEquipmentList";
import EquipmentInfoList from "../components/equipment/EquipmentList";

const EquipmentInfoPage = () => {
  return (
    <div className="equipment-info-page">
      <EquipmentInfoList />
      <CashEquipmentInfoList />
    </div>
  );
};

export default EquipmentInfoPage;
