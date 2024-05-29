const UnionArtifactCrystalListItem = ({ info }: any) => {
  const levelList = Array.from({ length: info.level }, (_, idx) => idx + 1);

  return (
    <li className={`union-artifact-crystal-list-item ${info.level===5 && 'max-level-item'}`}>
      <p className="crystal-level">{levelList.map(() => "★")}</p>
      <p className="crystal-name">{info.name}</p>
      <ul className="crystal-option-list">
        <li className="crystal-option-list-item">{info.crystal_option_name_1}</li>
        <li className="crystal-option-list-item">{info.crystal_option_name_2}</li>
        <li className="crystal-option-list-item">{info.crystal_option_name_3}</li>
      </ul>
    </li>
  );
};

export default UnionArtifactCrystalListItem;
