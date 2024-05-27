const UnionArtifactEffectList = ({ list }: any) => {
  return (
    <ul className="union-artifact-effect-list">
      {list &&
        list.map((effect: any) => (
          <li className="union-artifact-effect-list-item" key={`${effect.name}${effect.level}`}>
            <span className="artifact-effect-level">Lv.{effect.level}</span>
            <span className="artifact-effect-name">{effect.name}</span>
          </li>
        ))}
    </ul>
  );
};

export default UnionArtifactEffectList;
