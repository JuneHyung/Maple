
import { UnionRaiderInfo } from "@/models/union";
import UnionMemberList from "./UnionMemberList";
import UnionNoData from "./UnionNoData";
import UnionRaiderList from "./UnionRaiderList";
import UnionRaiderStatList from "./UnionRaiderStatList";

// 목록 컴포넌트 구분
type ListComponentProps = {info: UnionRaiderInfo, name: string}
const ListComponent = ({info, name}: ListComponentProps) => {
  switch(name){
    case 'union_occupied_stat':
      return <UnionRaiderList raider={info.union_occupied_stat.sort().reverse()} />;
    case 'union_block':
      return  <UnionMemberList blocks={ info.union_block.sort((a, b) => (a.block_type > b.block_type ? 1 : -1))} />;
    case 'union_raider_stat':
      return <UnionRaiderStatList list={info.union_raider_stat.sort().reverse()} />;
    default:
      return <UnionNoData />;
  }
}

const UnionInfoListContainer = ({ title, unionRaiderInfo, name }: {title:string, unionRaiderInfo: UnionRaiderInfo, name:string}) => {
  return (
    <div className="union-info-list">
      <h1 className="union-info-name info-title">{title}</h1>
      {unionRaiderInfo.hasOwnProperty(name) ? <ListComponent info={unionRaiderInfo} name={name}/> : <UnionNoData />}
    </div>
  );
};

export default UnionInfoListContainer;
