import { useEffect, useState } from "react";
import { checkIsActiveUnionBlock } from "../../api/util";
import { CellPosBlock, PosInfo, UnionBlock, UnionRaiderInfo } from "@/models/union";

type UnionTableProps ={info: UnionRaiderInfo};
const UnionTable =({info}: UnionTableProps) => {
  const [posInfo, setPosInfo] = useState([] as PosInfo[]);
  const arr = Array.from({length: 20},(_,i)=>Array.from({length: 22},(_,j)=>i*22+j))

  useEffect(()=>{
    if(info.union_block){
      const flatted = info.union_block.map((block: UnionBlock)=>{ 
        return block.block_position.map((pos: CellPosBlock) => {
            return {x: pos.x, y: pos.y, block_class: block.block_class}
          })
      }).flat();

      const sorted = flatted.sort((a: PosInfo,b:PosInfo)=>{
        if(a.x > b.x) return 1;
        else if(a.x < b.x) return -1;
        else return a.y - b.y;
      })
      setPosInfo(sorted);
    }
  }, [info])
  
  return (
    <div className="union-table">
      {
        arr.map((row, rIdx)=>
          <div className="row" key={rIdx}>
            {row.map((cell, cIdx) => 
              <div className={`cell ${checkIsActiveUnionBlock(posInfo, rIdx, cIdx)}`} key={cIdx}></div>
            )}
          </div> 
        )
      }
    </div>
  ) 
}

export default UnionTable;