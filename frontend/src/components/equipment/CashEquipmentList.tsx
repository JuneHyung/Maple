import { useCallback, useEffect, useState } from "react";
import { CashEquipmentInfo, getCharacterCashEquipment } from "../../api/equipment";
import CashEquipmentListItem from "./CashEquipmentListItem";
import { CommonProps } from "../TabContent";

const CashEquipmentInfoList = ({ ocid }: CommonProps) => {
  const [cashEquipmentInfo, setCashEquipmentInfo] = useState<CashEquipmentInfo>({} as CashEquipmentInfo);
  const [isOpen, setIsOpen] = useState(false);
  const getCashItemEquipmentInfo = useCallback(async (targetOcid: string) => {
    try {
      const info = await getCharacterCashEquipment(targetOcid);
      setCashEquipmentInfo(info);
    } catch (e) {
      setCashEquipmentInfo({} as CashEquipmentInfo);
      alert(e);
    }
  }, []);

  useEffect(() => {
    getCashItemEquipmentInfo(ocid);
  }, [getCashItemEquipmentInfo, ocid]);

  const OpenButton = () => {
    return cashEquipmentInfo.cash_item_equipment_list.length > 6 ? (
      <button className="open-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "접기" : "펼치기"}
      </button>
    ) : null;
  };

  return (
    <div className="equipment-info">
      <ul className={`equipment-info-list ${isOpen && "isOpen"}`}>
        <h1 className="info-title">CASH 장비</h1>
        {cashEquipmentInfo.cash_item_equipment_list !== undefined
          ? cashEquipmentInfo.cash_item_equipment_list.map((item) => (
              <CashEquipmentListItem item={item} key={item.cash_item_equipment_slot} />
            ))
          : null}
      </ul>
      {cashEquipmentInfo.preset_no && OpenButton()}
    </div>
  );
};

export default CashEquipmentInfoList;
