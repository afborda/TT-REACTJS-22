import React from "react";

import { Container } from "./styled";

function Input({ id, label, setValue, ...props }) {
  return (
    <>
      <label htmlFor={id}> {label}</label>
      <input
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  );
}

export default Input;