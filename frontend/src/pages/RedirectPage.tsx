import { useEffect } from "react"
import { useNavigate } from "react-router"

const RedirectPage = ({path}: any) =>{
  const nav=useNavigate();
  useEffect(()=>{
    nav(path)
  },[nav, path])
  return null;
}
export default RedirectPage