export const Ingredients = ({ ingredient }) => {
  if (!ingredient) {
    return null;
  }

  return <span style={{ marginRight: `10px` }}>{ingredient}</span>;
};
