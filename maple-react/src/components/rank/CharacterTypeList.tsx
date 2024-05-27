import { divideCharacterType } from '@/api/util';
import { useCallback } from 'react';
import classList from '@/assets/data/data.json';

import { useRankStore } from '@/store/rank';
import { CharacterType, ClassInfo } from '@/models/characterType';

const CharacterTypeList = () => {
  const { selectedClass, setSelectedClass } = useRankStore();
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
    [selectedClass.key],
  );
  return (
    <ul className="rank-class-list">
      {classList.map((row, idx) => {
        return (
          <div className="rank-class-row" key={idx}>
            {row.map((character) => (
              <li
                className={`rank-class-item ${divideCharacterType(character.type as CharacterType)} ${character.key === selectedClass.key ? 'selected-item' : ''}`}
                key={character.label}
                onClick={() => handleSelectedClass(character as ClassInfo)}>
                {character.label}
              </li>
            ))}
          </div>
        );
      })}
    </ul>
  );
};

export default CharacterTypeList;
