import { useCallback, useEffect, useState } from "react";
import { SymbolInfo, getCharacterSymbol } from "../../api/stat";

const SymbolInfoList = ({ocid}: any) =>{
  const [symbolInfo, setSymbolInfo] = useState<SymbolInfo>({} as SymbolInfo);
  
  const getSymbolInfo = useCallback(async (ocid: string) => {
    try {
      const result = await getCharacterSymbol(ocid);
      console.log(result)
      setSymbolInfo(result);
    } catch (e) {
      setSymbolInfo({} as SymbolInfo);
      alert(e);
    }
  }, []);

  useEffect(() => {
    getSymbolInfo(ocid);
  }, [getSymbolInfo, ocid]);
  return (
    <ul className="stat-info-list">
      <h1 className="info-title">심볼</h1>
      {symbolInfo.symbol && symbolInfo.symbol.map((symbol) => (
        <li key={symbol.symbol_name} className="equipment-info-item">
        <div className="equipment-img-wrap">
          <div className="equipment-icon">
            <img src={symbol.symbol_icon} alt={`${symbol.symbol_name} icon`} />
          </div>
          <div className="equipment-description">
            <p className="">{symbol.symbol_name}</p>
            <p className="">{symbol.symbol_level} </p>
            <p className="">{symbol.symbol_level===20 && 'MAX' } </p>
            <p className="item-name">{symbol.symbol_name.includes('어센틱') ? 'AUT' : 'ARC'} {symbol.symbol_force}</p>
          </div>
        </div>
      </li>
      ))}
    </ul>
  )
}
export default SymbolInfoList;