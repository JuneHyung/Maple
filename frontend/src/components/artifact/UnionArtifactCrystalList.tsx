import UnionArtifactCrystalListItem from "./UnionArtifactCrystalListItem";

const UnionArtifactCrystalList = ({list}: any) => {
  return (
    <ul className="union-artifact-crystal-list">
      {list && (
        list.map((crystal: any)=>{
          return <UnionArtifactCrystalListItem info={crystal} key={`${crystal.name}${crystal.level}`}/>
        })
      )}
    </ul>
  )
}

export default UnionArtifactCrystalList;