import { useReducer } from "react";
import { ContainerCounter } from "../counter/container";

const INITIAL_FORM = {
  name: ``,
  text: ``,
  save: ``,
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
    case `setSave`:
      return {
        ...INITIAL_FORM,
        save: payload,
      };
    default:
      return state;
  }
}

export const ReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_FORM);

  const { name, text, save } = form;

  return (
    <div>
      <div>
        <span>Name:</span>
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
        <span>Rating:</span>
        <ContainerCounter />
      </div>
      <button
        onClick={(event) => {
          dispatch({ type: `setSave`, payload: event.target.value });
        }}
      >
        Save
      </button>
    </div>
  );
};
