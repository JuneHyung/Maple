const SkillInfoListItem = ({ skill }: any) => {
  return (
    <li className="skill-info-item">
      <div className="skill-icon">
        <img src={skill.skill_icon} alt={`${skill.skill_name} icon`} />
        <p className="skill-skill-level">Lv.{skill.skill_level}</p>
      </div>
      <div className="skill-introduce">
        <p className="skill-name">{skill.skill_name}</p>
        {skill.skill_effect !== null && <div className="skill-effect">{skill.skill_effect}</div>}
      </div>
      <div className="skill-detail">
        <div className="skill-description">{skill.skill_description}</div>
      </div>
    </li>
  );
};
export default SkillInfoListItem;
