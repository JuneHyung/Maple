import { useEffect } from "react";
import { useNavigate } from "react-router";
type RedirectProps = {path: string}
const RedirectPage = ({ path }: RedirectProps) => {
  const nav = useNavigate();
  useEffect(() => {
    nav(path);
  }, [nav, path]);
  return null;
};
export default RedirectPage;
