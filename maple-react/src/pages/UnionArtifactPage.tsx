// import { useEffect } from "react";
import { useCallback, useEffect, useState } from "react";
import UnionArtifactCrystalList from "@/components/artifact/UnionArtifactCrystalList";
import UnionArtifactEffectList from "@/components/artifact/UnionArtifactEffectList";
import { getCharacterUnionArtifact } from "@/api/union";
import { useUserStore } from "@/store/user";
import { UnionArtifactInfo } from "@/models/union";

const UnionArtifactPage = () => {
  const {ocid} = useUserStore();
  const [artifactInfo, setArtifactInfo] = useState({} as UnionArtifactInfo);

  // ocid로 캐릭터의 유니온 아티팩트 정보 조회
  const getUnionArtifactInfo = useCallback(async (targetOcid: string) => {
    try {
      const info = await getCharacterUnionArtifact(targetOcid);
      setArtifactInfo(info);
    } catch (e) {
      setArtifactInfo({} as UnionArtifactInfo);
      alert(e);
    }
  }, []);


  useEffect(() => {
    if(ocid.length>0) getUnionArtifactInfo(ocid);
  }, [getUnionArtifactInfo, ocid]);
  return (
    <div className="union-artifact-container">
      <UnionArtifactCrystalList list={artifactInfo.union_artifact_crystal} />
      <UnionArtifactEffectList list={artifactInfo.union_artifact_effect} />
    </div>
  )
}
export default UnionArtifactPage;