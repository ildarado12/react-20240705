import { useSelector } from "react-redux";
import { Button } from "../button/button";
import { useUser } from "../login-context/context";
import styles from "./styles.module.css";
import { selectUserById } from "../../redux/entities/user";

export const UserButton = () => {
  const { value, toggleUser } = useUser();

  return (
    <div>
      {value === "Login" ? null : <h4 className={styles.user}>DefaultUser</h4>}
      <Button
        text={value === "Login" ? "Login" : "Exit"}
        onClick={toggleUser}
      />
    </div>
  );
};
