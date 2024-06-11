import { CashItemEquipment, ItemEquipment } from "@/models/equipment";
import { CharacterLinkSkill, CharacterSkill } from "@/models/skill";
import { FinalStat, Symbol } from "@/models/stat";

type OpenButtonProps = {
  list: CashItemEquipment[] | ItemEquipment | CharacterLinkSkill[] | CharacterSkill[] | FinalStat[] | Symbol[],
  isOpen: boolean,
  isVisible?: boolean,
  handleIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const OpenButton = ({ list=[], isVisible, isOpen, handleIsOpen }: OpenButtonProps) => {
  return isVisible && list.length<6 || list.length>=6 ? (
    <button className="open-button" onClick={() => handleIsOpen(!isOpen)}>
      {isOpen ? "접기" : "펼치기"}
    </button>
  ) : null;
};
export default OpenButton;
