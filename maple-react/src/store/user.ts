import { create } from "zustand";
interface UserStore{
  ocid: string;
  setOcid: (ocid:string) => void;
  isEmptyOcid: () => boolean;
  reset: () => void;
}
export const useUserStore = create<UserStore>((set, get)=>({
  ocid: '',
  setOcid: (ocid: string)=> set(()=>({ocid:ocid})),
  isEmptyOcid: () => {
    const {ocid} = get();
    return ocid.length===0
  },
  reset: ()=>{
    set({
      ocid: '',
    })
  }
}))