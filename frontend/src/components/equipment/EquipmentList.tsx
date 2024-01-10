import { useCallback, useEffect, useState } from "react";
import { EquipmentInfo, getCharacterEquipment } from "../../api/equipment";
import { divideGrade } from "../../api/util";

const EquipmentInfoList = ({ ocid }: any) => {
  const [equipmentInfo, setEquipmentInfo] = useState<EquipmentInfo>({} as EquipmentInfo);

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
    <ul className="equipment-info-list">
      <h1 className="info-title">장비</h1>
      {equipmentInfo.item_equipment !== undefined
        ? equipmentInfo.item_equipment.map((item) => (
            <li key={item.item_equipment_slot} className="equipment-info-item">
              <div className="equipment-img-wrap">
                <div className="equipment-icon">
                  <img src={item.item_icon} alt={`${item.item_name} icon`} />
                </div>
                <div className="equipment-description">
                  <p className="font-bold">{item.item_equipment_slot}</p>
                  <p className="item-name ellipsis-1 font-bold">{item.item_name}</p>
                  <p className="star-force font-bold">★ {item.starforce} </p>
                </div>
              </div>
              <ul className="item-potential-option-list">
                <li className={`item-potential-option-item ${divideGrade(item.potential_option_grade)}`}>{item.potential_option_1}</li>
                <li className={`item-potential-option-item ${divideGrade(item.potential_option_grade)}`}>{item.potential_option_2}</li>
                <li className={`item-potential-option-item ${divideGrade(item.potential_option_grade)}`}>{item.potential_option_3}</li>
              </ul>
            </li>
          ))
        : null}
    </ul>
  );
};

export default EquipmentInfoList;
