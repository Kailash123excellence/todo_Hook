import React, { useEffect } from "react";

export default function useHooks(editTodo, setInput) {
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  return {setInput};
}
