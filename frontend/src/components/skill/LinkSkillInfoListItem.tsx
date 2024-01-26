const LinkSkillInfoListItem = ({ skill }: any) => {
  return (
    <li className="link-info-item">
      <div className="link-icon">
        <img src={skill.skill_icon} alt={`${skill.skill_name} icon`} />
      </div>
      <div className="link-description">
        <p className="link-skill-name">
          {skill.skill_name}
          <span className="link-skill-level">Lv.{skill.skill_level}</span>
        </p>
        <p className="link-skill-effect">{skill.skill_effect} </p>
      </div>
    </li>
  );
};
export default LinkSkillInfoListItem;
