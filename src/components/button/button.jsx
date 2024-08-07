import styles from "./styles.module.css";
import classnames from "classnames";
import { useTheme } from "../theme-context/context";

export const Button = ({
  text,
  onClick,
  viewVariant = `default`,
  disabled = false,
}) => {
  const { value: themeValue } = useTheme();

  return (
    <button
      className={classnames(styles.button, {
        [styles.default]: viewVariant === `default`,
        [styles.large]: viewVariant === `large`,
        [styles.light]: themeValue === `light`,
        [styles.dark]: themeValue === `dark`,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
