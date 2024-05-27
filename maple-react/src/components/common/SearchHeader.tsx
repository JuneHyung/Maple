import { getOcidByCharacterName } from '@/api/user';
import { useUserStore } from '@/store/user';
import { ChangeEvent, useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SearchHeader = () => {
  const [characterName, setCharacterName] = useState('');
  const userStore = useUserStore();
  const nav = useNavigate();

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCharacterName(e.target.value);
  }, []);

  const handleOnClick = useCallback(async (character_name: string) => {
    if (character_name) {
      try {
        const {ocid} = await getOcidByCharacterName(character_name);
        userStore.setOcid(ocid);
        nav(`/user/${characterName}/stat`);
      } catch (e) {
        userStore.setOcid('');
      }
    }
  }, []);

  const resetStatus = useCallback(() => {
    setCharacterName('');
    userStore.setOcid('');
  }, []);
  return (
    <header className="app-header">
      <div className="logo-wrap">
        <video className="logo-image" autoPlay loop preload="auto">
          <source type="video/webm" src={"src/assets/images/pinkbean.webm"} />
        </video>
        <h1 className="app-title">
          <Link to="/" onClick={resetStatus}>
            완전 메짱이셔
          </Link>
        </h1>
      </div>
      <div className="search-bar-wrap">
        <input
          type="text"
          onChange={handleOnChange}
          className="search-bar-input"
          value={characterName}
        />
        <button onClick={() => handleOnClick(characterName)} className="search-button">
          Search
        </button>
      </div>
    </header>
  );
};

export default SearchHeader;
