import { ChangeEvent, useCallback, useState } from 'react';
import './assets/scss/app.scss';
import TabContent from './components/TabContent';
import NoData from './components/NoData';
import { getData } from './api';
import { Navigate, useNavigate } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';

interface OCIDResponse {
  ocid: string
}
const App = () => {
  const baseUrl = process.env.REACT_APP_BACKEND_URL

  const [characterName, setCharacterName] = useState("이깅우")
  const [ocid, setOcid] = useState("");
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) =>{
    setCharacterName(e.target.value)
  }

  const handleOnClick = async (character_name: string) => {
    const response = await getData<OCIDResponse>(`${baseUrl}/user/ocid`, {params: {characterName: character_name}})
    const {ocid} = response.result;
    setOcid(ocid);
  }

  const resetStatus = useCallback(()=>{
    setCharacterName('')
    setOcid('')
  },[])
  return (
      <BrowserRouter>
    <div className="app">
      <div className="content">
      <header className="app-header">
        <div className='logo-wrap'>
          <img src={require('./assets/images/pinkbean.gif')} alt="PinkBean Logo" className='logo-image'/>
          <h1 className="app-title"><Link to="/" onClick={resetStatus}>완전 메짱이셔</Link></h1>
        </div>
        <div className="search-bar-wrap">
          <input type="text" onChange={handleOnChange} className="search-bar-input" value={characterName}/>
          <button onClick={()=>handleOnClick(characterName)} className="search-button">Search</button>
        </div>
      </header>

      {
        <TabContent ocid={ocid} handleOCID={handleOnClick} setCharacterName={setCharacterName}/>
      }
      
      </div>
    </div>
      </BrowserRouter>
  );
}

export default App;
