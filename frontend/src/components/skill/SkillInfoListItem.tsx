import { useEffect, useRef } from "react";
import { CharacterSkill } from "../../api/skill";

type SkillInfoListItemProps = {skill: CharacterSkill}
const SkillInfoListItem = ({ skill }: SkillInfoListItemProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  
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
    <li className="skill-info-item">
      <div className="skill-icon">
        <img data-src={skill.skill_icon} alt={`${skill.skill_name} icon`} ref={imgRef}/>
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
