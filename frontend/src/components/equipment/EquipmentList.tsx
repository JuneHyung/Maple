import { useCallback, useEffect, useState } from "react";
import { EquipmentInfo, getCharacterEquipment } from "../../api/equipment";
import { divideGrade } from "../../api/util";
import EquipmentListItem from "./EquipmentListItem";

const EquipmentInfoList = ({ ocid }: any) => {
  const [equipmentInfo, setEquipmentInfo] = useState<EquipmentInfo>({} as EquipmentInfo);
  const [isOpen, setIsOpen] = useState(false);
  const getItemEquipmentInfo = useCallback(async (targetOcid: string) => {
    try {
      const info = await getCharacterEquipment(targetOcid);
      setEquipmentInfo(info);
    } catch (e) {
      setEquipmentInfo({} as EquipmentInfo);
      alert(e);
    }
  }, []);

  useEffect(() => {
    getItemEquipmentInfo(ocid);
  }, [getItemEquipmentInfo, ocid]);

  return (
    <div className="equipment-info">
      <ul className={`equipment-info-list ${isOpen && "isOpen"}`}>
        <h1 className="info-title">장비</h1>
        {equipmentInfo.item_equipment !== undefined
          ? equipmentInfo.item_equipment.map((item) => (
              <EquipmentListItem item={item} grade={divideGrade(item.potential_option_grade)} key={item.item_equipment_slot} />
            ))
          : null}
      </ul>
      <button className="open-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "접기" : "펼치기"}
      </button>
    </div>
  );
};

export default EquipmentInfoList;
