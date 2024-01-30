import { useEffect, useRef } from "react";
import { Symbol } from "../../api/stat";

type SymbolInfoListItemProps = {symbol: Symbol};
const SymbolInfoListItem = ({ symbol }: SymbolInfoListItemProps) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(()=>{
    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          const target = entry.target as HTMLImageElement;
          target.src = target.dataset.src as string;
          observer.unobserve(entry.target);
        }
      })
    }
    const observer = new IntersectionObserver(callback,{});
    observer.observe(imgRef.current as HTMLImageElement);
    return ()=>observer.disconnect();
  },[])

  return (
    <li key={symbol.symbol_name} className="symbol-info-item">
      <div className="symbol-icon">
        <img data-src={symbol.symbol_icon} alt={`${symbol.symbol_name} icon`} ref={imgRef}/>
      </div>
      <div className="symbol-description">
        <p className="symbol-name">{symbol.symbol_name}</p>
        <p className="symbol-level">
          Lv. {symbol.symbol_level} <span className="symbol-level-status">{symbol.symbol_level === 20 && "MAX"} </span>
        </p>
        <p className="symbol-force">
          {symbol.symbol_name.includes("어센틱") ? "AUT" : "ARC"} {symbol.symbol_force}
        </p>
      </div>
    </li>
  );
};
export default SymbolInfoListItem;
