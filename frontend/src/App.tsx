import { ChangeEvent, useState } from 'react';
import './assets/scss/app.scss';
import TabContent from './components/TabContent';
import NoData from './components/NoData';
import { getData } from './api';
import { useNavigate } from 'react-router';

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

  const handleOnClick = async () => {
    const response = await getData<OCIDResponse>(`${baseUrl}/user/ocid`, {params: {characterName}})
    const {ocid} = response.result;
    setOcid(ocid)
  }
  return (
    <div className="app">
      <div className="content">
      <header className="app-header">
        <div className='logo-wrap'>
          <img src={require('./assets/images/pinkbean.gif')} alt="PinkBean Logo" className='logo-image'/>
          <h1 className="app-title">완전 메짱이셔</h1>
        </div>
        <div className="search-bar-wrap">
          <input type="text" onChange={handleOnChange} className="search-bar-input"/>
          <button onClick={handleOnClick} className="search-button">Search</button>
        </div>
      </header>

      {
        <TabContent ocid={ocid} />
      }
      
      </div>
    </div>
  );
}

export default App;
