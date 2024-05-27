import { getData } from '@/api';
import { PathList } from '@/models/path';
import { useUserStore } from '@/store/user';
import { ChangeEvent, useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
interface OCIDResponse {
  ocid: string;
}
const SearchHeader = () => {
  const [characterName, setCharacterName] = useState('이깅우');
  const userStore = useUserStore();
  const nav = useNavigate();
  // const pathList: PathList = [
  //   { path: '/', label: 'Open Page' },
  //   { path: '/page01', label: 'Page01' },
  //   { path: '/page02', label: 'Page02' },
  // ];

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCharacterName(e.target.value);
  }, []);

  const handleOnClick = useCallback(async (character_name: string) => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL;
    if (character_name) {
      try {
        const response = await getData<OCIDResponse>(`${baseUrl}/user/ocid`, {
          params: { characterName: character_name },
        });
        const { ocid } = response.result;
        userStore.setOcid(ocid);
        nav('/detail/stat');
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
          <source type="video/webm" src={"@/assets/images/pinkbean.webm"} />
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
