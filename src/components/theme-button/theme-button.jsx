import { Button } from "../button/button";
import { useTheme } from "../theme-context/context";

export const ThemeButton = () => {
  const { value, toggleTheme } = useTheme();
  return (
    <Button
      text={value === "light" ? "Theme light" : "Theme dark"}
      onClick={toggleTheme}
    />
  );
};
