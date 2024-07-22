export const Counter = ({ value=0, increment, decrement }) => {
  return (
    <div>
      <button onClick={decrement}>-</button>
      {value}
      <button onClick={increment}>+</button>
    </div>
  );
};
