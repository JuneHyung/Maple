import { CharacterLinkSkill } from "@/models/skill";
import { useEffect, useRef } from "react";

export type LinkSkillInfoListItemProps = {skill: CharacterLinkSkill}
const LinkSkillInfoListItem = ({ skill }: LinkSkillInfoListItemProps) => {
  const imgRef = useRef<HTMLImageElement>(null);

  // 화면에 표시 중인 이미지만 지연 로딩
  useEffect(()=>{
    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach(entry=>{
        if(entry.isIntersecting){ // 화면에 보이면
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
