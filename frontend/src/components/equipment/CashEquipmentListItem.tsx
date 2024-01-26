const CashEquipmentListItem = ({ item }: any) => {
  return (
    <li className="equipment-info-item">
      <div className="equipment-img-wrap">
        <div className="equipment-icon">
          <img src={item.cash_item_icon} alt={`${item.cash_item_name} icon`} />
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
