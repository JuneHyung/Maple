import { ChangeEvent, useCallback, useEffect, useState } from "react";
import "./assets/scss/app.scss";
import TabContent from "./components/TabContent";
import { getData } from "./api";
import { BrowserRouter, Link } from "react-router-dom";

interface OCIDResponse {
  ocid: string;
}
const App = () => {
  const baseUrl = process.env.REACT_APP_BACKEND_URL;

  const [characterName, setCharacterName] = useState("이깅우");
  const [ocid, setOcid] = useState("");
  
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCharacterName(e.target.value);
  };
  const handleOnClick = async (character_name: string) => {
    if (character_name) {
      try {
        const response = await getData<OCIDResponse>(`${baseUrl}/user/ocid`, { params: { characterName: character_name } });
        const { ocid } = response.result;
        setOcid(ocid);
      } catch (e) {
        setOcid("");
      }
    }
  };

  const resetStatus = useCallback(() => {
    setCharacterName("");
    setOcid("");
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <div className="content">
          <header className="app-header">
            <div className="logo-wrap">
              <video className="logo-image" autoPlay loop preload="auto">
                <source type="video/webm" src={require("./assets/images/pinkbean.webm")} />
              </video>
              {/* <img src={} alt="PinkBean Logo"  /> */}
              <h1 className="app-title">
                <Link to="/" onClick={resetStatus}>
                  완전 메짱이셔
                </Link>
              </h1>
            </div>
            <div className="search-bar-wrap">
              <input type="text" onChange={handleOnChange} className="search-bar-input" value={characterName} />
              <button onClick={() => handleOnClick(characterName)} className="search-button">
                Search
              </button>
            </div>
          </header>

          {<TabContent ocid={ocid} handleOCID={handleOnClick} setCharacterName={setCharacterName} />}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
