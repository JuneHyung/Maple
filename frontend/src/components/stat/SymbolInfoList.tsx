import { useCallback, useEffect, useState } from "react";
import { SymbolInfo, getCharacterSymbol } from "../../api/stat";

const SymbolInfoList = ({ocid}: any) =>{
  const [symbolInfo, setSymbolInfo] = useState<SymbolInfo>({} as SymbolInfo);
  const [isOpen, setIsOpen] = useState(false);
  
  const getSymbolInfo = useCallback(async (ocid: string) => {
    try {
      const result = await getCharacterSymbol(ocid);
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
    <div className="symbol-info">
    <ul className={`symbol-info-list ${isOpen ? 'isOpen' : ''}`}>
      <h1 className="info-title">심볼</h1>
      {symbolInfo.symbol && symbolInfo.symbol.map((symbol) => (
        <li key={symbol.symbol_name} className="symbol-info-item">
        
          <div className="symbol-icon">
            <img src={symbol.symbol_icon} alt={`${symbol.symbol_name} icon`} />
          </div>
          <div className="symbol-description">
            <p className="symbol-name">{symbol.symbol_name}</p>
            <p className="symbol-level">Lv. {symbol.symbol_level} <span className="symbol-level-status">{symbol.symbol_level===20 && 'MAX' } </span></p>
            <p className="symbol-force">{symbol.symbol_name.includes('어센틱') ? 'AUT' : 'ARC'} {symbol.symbol_force}</p>
          </div>
        
      </li>
      ))}
    </ul>
    <button className="open-button" onClick={()=>setIsOpen(!isOpen)}>{isOpen ? '접기' : '펼치기'}</button>
    </div>
  )
}
export default SymbolInfoList;