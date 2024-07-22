export const Ingredients = ({ ingredient }) => {
  if (!ingredient) {
    return null;
  }

  return <span>{ingredient}</span>;
};
