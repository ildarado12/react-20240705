export const Review = ({ user, text, rating }) => {
  if (!user) {
    return null;
  }

  return (
    <div>
      {user}:{text?.length ? <span> "{text}"</span> : null}
      <p>Rating: {rating}</p>
    </div>
  );
};
