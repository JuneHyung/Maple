import { useEffect, useRef, useState } from "react";

const useIsVisible = (maxHeight: number) => {
  const [isVisible, setIsVisible] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(()=>{
    if(listRef.current){
      console.log(listRef.current)
      const height = listRef.current.offsetHeight;
      setIsVisible(height>=maxHeight);
    }
  },[])

  return {isVisible, listRef};
}

export default useIsVisible;