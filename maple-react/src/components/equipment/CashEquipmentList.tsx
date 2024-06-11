import { useCallback, useEffect, useState } from "react";
import { getCharacterCashEquipment } from "@/api/equipment";
import CashEquipmentListItem from "./CashEquipmentListItem";
import OpenButton from "@/components/common/OpenButton";
import { useUserStore } from "@/store/user";
import { CashEquipmentInfo } from "@/models/equipment";
import useIsVisible from "@/api/hooks";

const CashEquipmentInfoList = () => {
  const {ocid} = useUserStore();
  const [cashEquipmentInfo, setCashEquipmentInfo] = useState<CashEquipmentInfo>({} as CashEquipmentInfo);
  const [isOpen, setIsOpen] = useState(false);
  const {isVisible, listRef} = useIsVisible(450);

  // ocid로 캐시장비 정보 조회.
  const getCashItemEquipmentInfo = useCallback(async (targetOcid: string) => {
    try {
      const info = await getCharacterCashEquipment(targetOcid);
      setCashEquipmentInfo(info);
    } catch (e) {
      setCashEquipmentInfo({} as CashEquipmentInfo);
      alert(e);
    }
  }, []);

  // ocid가 바뀌면 재조회.
  useEffect(() => {
    if(ocid.length>0){
      getCashItemEquipmentInfo(ocid);
    }
    setIsOpen(false);
  }, [getCashItemEquipmentInfo, ocid]);

  return (
    <div className="equipment-info">
      <ul ref={listRef} className={`equipment-info-list cash-equipment-info-list ${isOpen && "isOpen"}`}>
        <h1 className="info-title">CASH 장비</h1>
        {cashEquipmentInfo.cash_item_equipment_list !== undefined
          ? cashEquipmentInfo.cash_item_equipment_list.map((item) => (
              <CashEquipmentListItem item={item} key={item.cash_item_equipment_slot} />
            ))
          : null}
      </ul>
      {cashEquipmentInfo.preset_no && <OpenButton list={cashEquipmentInfo.cash_item_equipment_list} isVisible={isVisible} isOpen={isOpen} handleIsOpen={setIsOpen}/> }
    </div>
  );
};

export default CashEquipmentInfoList;
