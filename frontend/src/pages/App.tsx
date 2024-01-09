import { ChangeEvent, useState } from 'react';
import TabContent from '../components/TabContent';
import NoData from '../components/NoData';
import { getData } from '../api';

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
    console.log(ocid)

    setOcid(ocid)
  }
  return (
    <div className="App">
      <div>
        <input type="text" onChange={handleOnChange}/>
        <button onClick={handleOnClick}>Search</button>
      </div>

      {
        ocid.length===0 ? <NoData /> : <TabContent />
      }
      
      <div>{characterName}</div>
    </div>
  );
}

export default App;
