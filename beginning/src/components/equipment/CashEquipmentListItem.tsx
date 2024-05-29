import { useEffect, useRef } from "react";
import { CashItemEquipment } from "../../api/equipment";

type CashEquipmentListItemProps = {item: CashItemEquipment};
const CashEquipmentListItem = ({ item }: CashEquipmentListItemProps) => {
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
          <img data-src={item.cash_item_icon} alt={`${item.cash_item_name} icon`} ref={imgRef} />
        </div>
        <div className="equipment-description">
          <p className="font-bold">
            {item.cash_item_equipment_part === item.cash_item_equipment_slot ? item.cash_item_equipment_slot : `${item.cash_item_equipment_slot}/${item.cash_item_equipment_part}`}
          </p>
          <p className="item-name ellipsis-1 font-bold">{item.cash_item_name}</p>
        </div>
      </div>
    </li>
  );
};

export default CashEquipmentListItem;
