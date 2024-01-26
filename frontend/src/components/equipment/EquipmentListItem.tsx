const EquipmentListItem = ({item, grade}: any) => {
  return (
    <li className="equipment-info-item">
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
        <li className={`item-potential-option-item ${grade}`}>{item.potential_option_1}</li>
        <li className={`item-potential-option-item ${grade}`}>{item.potential_option_2}</li>
        <li className={`item-potential-option-item ${grade}`}>{item.potential_option_3}</li>
      </ul>
    </li>
  );
};

export default EquipmentListItem;
