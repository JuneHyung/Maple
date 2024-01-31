import { useCallback, useEffect, useState } from "react";
import { SymbolInfo, getCharacterSymbol } from "../../api/stat";
import SymbolInfoListItem from "./SymbolInfoListItem";
import { CommonProps } from "../TabContent";
import OpenButton from "../common/OpenButton";

const SymbolInfoList = ({ ocid }: CommonProps) => {
  const [symbolInfo, setSymbolInfo] = useState<SymbolInfo>({} as SymbolInfo);
  const [isOpen, setIsOpen] = useState(false);

  // ocid로 캐릭터의 심볼정보 조회.
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
        {symbolInfo.symbol && symbolInfo.symbol.map((symbol, idx) => <SymbolInfoListItem symbol={symbol} idx={idx} key={`${symbol.symbol_name}${symbol.symbol_force}`}/>)}
      </ul>
      <OpenButton list={symbolInfo.symbol} isOpen={isOpen} handleIsOpen={setIsOpen} />
    </div>
  );
};
export default SymbolInfoList;
