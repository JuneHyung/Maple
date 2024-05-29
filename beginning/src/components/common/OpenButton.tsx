import { CashItemEquipment, ItemEquipment } from "../../api/equipment";
import { CharacterLinkSkill, CharacterSkill,  } from "../../api/skill";
import { FinalStat, Symbol } from "../../api/stat";

type OpenButtonProps = {
  list: CashItemEquipment[] | ItemEquipment | CharacterLinkSkill[] | CharacterSkill[] | FinalStat[] | Symbol[],
  isOpen: boolean,
  handleIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const OpenButton = ({ list=[], isOpen, handleIsOpen }: OpenButtonProps) => {
  return list.length > 6 ? (
    <button className="open-button" onClick={() => handleIsOpen(!isOpen)}>
      {isOpen ? "접기" : "펼치기"}
    </button>
  ) : null;
};
export default OpenButton;
