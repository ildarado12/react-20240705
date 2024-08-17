import { useParams } from "react-router-dom";
import { Menu } from "../menu/menu";

export const MenuPage = () => {
  const { menuId } = useParams();

  return (
    <div>
      <Menu id={menuId} />
    </div>
  );
};
