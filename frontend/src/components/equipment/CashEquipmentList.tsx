import { useCallback, useEffect, useState } from "react";
import { CashEquipmentInfo, getCharacterCashEquipment  } from "../../api/equipment";
// import { divideGrade } from "../../api/util";

const CashEquipmentInfoList = ({ ocid }: any) => {
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

  const SwitchPreset = (preset_no: number) => {
    switch(preset_no){
      case 1:
        return (
          cashEquipmentInfo.cash_item_equipment_preset_1 !== undefined
            ? cashEquipmentInfo.cash_item_equipment_preset_1.map((item) => (
                <li key={item.cash_item_equipment_slot} className="equipment-info-item">
                  <div className="equipment-img-wrap">
                    <div className="equipment-icon">
                      <img src={item.cash_item_icon} alt={`${item.cash_item_name} icon`} />
                    </div>
                    <div className="equipment-description">
                      <p className="font-bold">{item.cash_item_equipment_part===item.cash_item_equipment_slot ? item.cash_item_equipment_slot : `${item.cash_item_equipment_slot}/${item.cash_item_equipment_part}`}</p>
                      <p className="item-name ellipsis-1 font-bold">{item.cash_item_name}</p>
                    </div>
                  </div>
                </li>
              ))
            : null
        )
      case 2:
        return (
          cashEquipmentInfo.cash_item_equipment_preset_2 !== undefined
            ? cashEquipmentInfo.cash_item_equipment_preset_2.map((item) => (
                <li key={item.cash_item_equipment_slot} className="equipment-info-item">
                  <div className="equipment-img-wrap">
                    <div className="equipment-icon">
                      <img src={item.cash_item_icon} alt={`${item.cash_item_name} icon`} />
                    </div>
                    <div className="equipment-description">
                      <p className="font-bold">{item.cash_item_equipment_part===item.cash_item_equipment_slot ? item.cash_item_equipment_slot : `${item.cash_item_equipment_slot}/${item.cash_item_equipment_part}`}</p>
                      <p className="item-name ellipsis-1 font-bold">{item.cash_item_name}</p>
                    </div>
                  </div>
                </li>
              ))
            : null
        )
      case 3:
        return (
          cashEquipmentInfo.cash_item_equipment_preset_3 !== undefined
            ? cashEquipmentInfo.cash_item_equipment_preset_3.map((item) => (
                <li key={item.cash_item_equipment_slot} className="equipment-info-item">
                  <div className="equipment-img-wrap">
                    <div className="equipment-icon">
                      <img src={item.cash_item_icon} alt={`${item.cash_item_name} icon`} />
                    </div>
                    <div className="equipment-description">
                      <p className="font-bold">{item.cash_item_equipment_part===item.cash_item_equipment_slot ? item.cash_item_equipment_slot : `${item.cash_item_equipment_slot}/${item.cash_item_equipment_part}`}</p>
                      <p className="item-name ellipsis-1 font-bold">{item.cash_item_name}</p>
                    </div>
                  </div>
                </li>
              ))
            : null
        )
      default: return;
    }
  }

  const OpenButton = (presetNo: number) => {
    const equipmentList = presetNo===3 ? cashEquipmentInfo.cash_item_equipment_preset_3 : presetNo===2 ? cashEquipmentInfo.cash_item_equipment_preset_2 : cashEquipmentInfo.cash_item_equipment_preset_1;
    return equipmentList.length>6 ? <button className="open-button" onClick={()=>setIsOpen(!isOpen)}>{isOpen ? '접기' : '펼치기'}</button> : null;
  }

  return (
    <div className="equipment-info">
    <ul className={`equipment-info-list ${isOpen && 'isOpen'}`}>
    <h1 className="info-title">CASH 장비</h1>
    {cashEquipmentInfo.preset_no && SwitchPreset(cashEquipmentInfo.preset_no)}
  </ul>
  {
    cashEquipmentInfo.preset_no && OpenButton(cashEquipmentInfo.preset_no)
  }
  </div>
  );
};

export default CashEquipmentInfoList;
