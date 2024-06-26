import { useCallback, useState } from "react";
import RankInfoList from "../components/rank/RankInfoList";
import classList from "../assets/data/data.json";
import { CharacterType, divideCharacterType } from "../api/util";
import { TabContentProps } from "../components/TabContent";
export interface ClassInfo {
  key: string;
  type: CharacterType;
  label: string;
}

export type RankInfoPageProps = Omit<TabContentProps, 'ocid'>

const RankInfoPage = ({ handleOCID, setCharacterName }: RankInfoPageProps) => {
  const [selectedClass, setSelectedClass] = useState<ClassInfo>({} as ClassInfo);
  
  // 직업 선택
  const handleSelectedClass = useCallback(
    (character: ClassInfo) => {
      if (selectedClass.key) {
        if (selectedClass.key === character.key) setSelectedClass({} as ClassInfo);
        else setSelectedClass(character);
      } else {
        setSelectedClass(character);
      }
    },
    [selectedClass.key]
  );

  return (
    <div className="rank-info-page">
      <ul className="rank-class-list">
        {classList.map((row, idx) => {
          return (
            <div className="rank-class-row" key={idx}>
              {row.map((character) => (
                <li
                  className={`rank-class-item ${divideCharacterType(character.type as CharacterType)} ${character.key === selectedClass.key ? "selected-item" : ""}`}
                  key={character.label}
                  onClick={() => handleSelectedClass(character as ClassInfo)}
                >
                  {character.label}
                </li>
              ))}
            </div>
          );
        })}
      </ul>
      <RankInfoList selected={selectedClass} handleOCID={handleOCID} setCharacterName={setCharacterName} />
    </div>
  );
};
export default RankInfoPage;
