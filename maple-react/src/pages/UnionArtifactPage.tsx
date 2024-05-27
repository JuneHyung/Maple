// import { useEffect } from "react";
import { useCallback, useEffect, useState } from "react";
import UnionArtifactCrystalList from "@/components/artifact/UnionArtifactCrystalList";
import UnionArtifactEffectList from "@/components/artifact/UnionArtifactEffectList";
import { UnionArtifactInfo, getCharacterUnionArtifact } from "../api/union";
import { useUserStore } from "@/store/user";

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
    getUnionArtifactInfo(ocid);
  }, [getUnionArtifactInfo, ocid]);
  return (
    <div className="union-artifact-container">
      <UnionArtifactCrystalList list={artifactInfo.union_artifact_crystal} />
      <UnionArtifactEffectList list={artifactInfo.union_artifact_effect} />
    </div>
  )
}
export default UnionArtifactPage;