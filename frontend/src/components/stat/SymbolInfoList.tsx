import { useCallback, useEffect, useState } from "react";
import { SymbolInfo, getCharacterSymbol } from "../../api/stat";
import SymbolInfoListItem from "./SymbolInfoListItem";
import { CommonProps } from "../TabContent";

const SymbolInfoList = ({ ocid }: CommonProps) => {
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
      <ul className={`symbol-info-list ${isOpen ? "isOpen" : ""}`}>
        <h1 className="info-title">심볼</h1>
        {symbolInfo.symbol && symbolInfo.symbol.map((symbol) => <SymbolInfoListItem symbol={symbol} key={`${symbol.symbol_name}${symbol.symbol_force}`}/>)}
      </ul>
      <button className="open-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "접기" : "펼치기"}
      </button>
    </div>
  );
};
export default SymbolInfoList;
