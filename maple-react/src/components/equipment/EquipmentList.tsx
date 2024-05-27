import { useCallback, useEffect, useState } from "react";
import { getCharacterEquipment } from "../../api/equipment";
import { divideGrade } from "../../api/util";
import EquipmentListItem from "./EquipmentListItem";
import OpenButton from "../common/OpenButton";
import { useUserStore } from "@/store/user";
import { EquipmentInfo } from "@/models/equipment";

const EquipmentInfoList = () => {
  const {ocid} = useUserStore();
  const [equipmentInfo, setEquipmentInfo] = useState<EquipmentInfo>({} as EquipmentInfo);
  const [isOpen, setIsOpen] = useState(false);

  // ocid로 장비목록 조회.
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
    if(ocid){
      getItemEquipmentInfo(ocid);
    }
    setIsOpen(false);
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
      <OpenButton list={equipmentInfo.item_equipment} isOpen={isOpen} handleIsOpen={setIsOpen}/>
    </div>
  );
};

export default EquipmentInfoList;
