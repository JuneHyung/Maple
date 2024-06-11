import { useCallback, useEffect, useState } from 'react';
import { getCharacterStat } from '@/api/stat';
import { useUserStore } from '@/store/user';
import { FinalStat } from '@/models/stat';
import StatInfoListItem from './StatInfoListItem';
import OpenButton from '@/components/common/OpenButton';
import useIsVisible from '@/api/hooks';

const StatInfoList = () => {
  const { ocid } = useUserStore();
  const [statInfo, setStatInfo] = useState<FinalStat[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const {isVisible, listRef} = useIsVisible(300);
  // ocid로 캐릭터의 스탯정보 조회
  const getStatInfo = useCallback(async (ocid: string) => {
    try {
      const result = await getCharacterStat(ocid);
      setStatInfo(result);
    } catch (e) {
      setStatInfo([]);
      alert(e);
    }
  }, []);

  useEffect(() => {
    if(ocid.length>0) getStatInfo(ocid);
  }, [getStatInfo, ocid]);

  return (
    <div className="stat-info">
      <ul ref={listRef} className={`stat-info-list ${isOpen ? 'isOpen' : ''}`}>
        <h1 className="info-title">스탯</h1>
        {statInfo.map((stat) => (
          <StatInfoListItem stat={stat} key={`${stat.stat_name}${stat.stat_value}`} />
        ))}
      </ul>
      <OpenButton list={statInfo} isVisible={isVisible} isOpen={isOpen} handleIsOpen={setIsOpen} />
    </div>
  );
};

export default StatInfoList;
