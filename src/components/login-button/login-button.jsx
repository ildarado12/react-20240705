import { Button } from "../button/button";
import { useUser } from "../login-context/context";
import styles from "./styles.module.css";

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
