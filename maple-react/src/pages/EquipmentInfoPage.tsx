import CashEquipmentInfoList from '../components/equipment/CashEquipmentList';
import EquipmentInfoList from '../components/equipment/EquipmentList';

const EquipmentInfoPage = () => {
  return (
    <div className="equipment-info-page">
      <div className="info-block">
        <EquipmentInfoList />
      </div>
      <div className="info-block">
        <CashEquipmentInfoList />
      </div>
    </div>
  );
};

export default EquipmentInfoPage;
