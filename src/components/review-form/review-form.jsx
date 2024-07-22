import { useReducer } from "react";
import { ContainerCounter } from "../counter/container";
import styles from "./styles.module.css";
import classnames from "classnames";

const INITIAL_FORM = {
  name: ``,
  text: ``,
  reset: 0,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case `setName`:
      return {
        ...state,
        name: payload,
      };
    case `setText`:
      return {
        ...state,
        text: payload,
      };
    case `setReset`:
      return {
        ...INITIAL_FORM,
        reset: payload,
      };
    default:
      return state;
  }
}

export const ReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_FORM);

  const { name, text, reset } = form;

  return (
    <div className={classnames(styles.card)}>
      <div>
        <span className={classnames(styles.name)}>Name:</span>
        <input
          value={name}
          onChange={(event) => {
            dispatch({ type: `setName`, payload: event.target.value });
          }}
        ></input>
      </div>
      <div>
        <span>Text:</span>
        <input
          value={text}
          onChange={(event) => {
            dispatch({ type: `setText`, payload: event.target.value });
          }}
        ></input>
      </div>
      <div>
        <span className={classnames(styles.rating)}>Rating:</span>
        <ContainerCounter max={5} />
      </div>
      <button
        className={classnames(styles.button)}
        value={reset}
        onClick={(event) => {
          dispatch({ type: `setReset`, payload: event.target.value });
        }}
      >
        Send
      </button>
    </div>
  );
};
