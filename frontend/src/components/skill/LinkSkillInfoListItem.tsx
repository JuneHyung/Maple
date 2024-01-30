import { useEffect, useRef } from "react";
import { CharacterLinkSkill } from "../../api/skill";

export type LinkSkillInfoListItemProps = {skill: CharacterLinkSkill}
const LinkSkillInfoListItem = ({ skill }: LinkSkillInfoListItemProps) => {
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
    <li className="link-info-item">
      <div className="link-icon">
        <img data-src={skill.skill_icon} alt={`${skill.skill_name} icon`} ref={imgRef}/>
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
