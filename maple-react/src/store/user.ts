import { create } from "zustand";
interface UserStore{
  characterName: string;
  ocid: string;
  setCharacterName: (name: string) => void;
  setOcid: (ocid:string) => void;
  isEmptyOcid: () => boolean;
  reset: () => void;
}
export const useUserStore = create<UserStore>((set, get)=>({
  characterName: '',
  ocid: '',
  setCharacterName: (name: string)=> set(()=>({characterName: name})),
  setOcid: (ocid: string)=> set(()=>({ocid:ocid})),
  isEmptyOcid: () => {
    const {ocid} = get();
    return ocid.length===0
  },
  reset: ()=>{
    set({
      characterName: '',
      ocid: '',
    })
  }
}))