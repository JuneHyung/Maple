import { PotentialEquipment } from "@/models/equipment";
import { GradeClass } from "@/models/util";
import { useEffect, useRef } from "react";

type EquipmentlistItemProps = {item: PotentialEquipment, grade: GradeClass}

const EquipmentListItem = ({item, grade}: EquipmentlistItemProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  
  // 화면에 표시 중인 이미지만 지연 로딩
  useEffect(()=>{
    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          const target = entry.target as HTMLImageElement;
          target.src = target.dataset.src as string;
          observer.unobserve(entry.target);
        }
      })
    };

    const obeserver = new IntersectionObserver(callback, {});
    obeserver.observe(imgRef.current as HTMLImageElement);
  }, [])

  return (
    <li className="equipment-info-item">
      <div className="equipment-img-wrap">
        <div className="equipment-icon">
          <img data-src={item.item_icon} alt={`${item.item_name} icon`} ref={imgRef} />
        </div>
        <div className="equipment-description">
          <p className="font-bold">{item.item_equipment_slot}</p>
          <p className="item-name ellipsis-1 font-bold">{item.item_name}</p>
          <p className="star-force font-bold">★ {item.starforce} </p>
        </div>
      </div>
      <ul className="item-potential-option-list">
        <li className={`item-potential-option-item ${grade}`}>{item.potential_option_1}</li>
        <li className={`item-potential-option-item ${grade}`}>{item.potential_option_2}</li>
        <li className={`item-potential-option-item ${grade}`}>{item.potential_option_3}</li>
      </ul>
    </li>
  );
};

export default EquipmentListItem;
