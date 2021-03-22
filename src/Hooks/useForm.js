import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [form, setForm] = useState(initialState);

  const reset = () => {
    setForm(initialState);
  };

  const handLeInputChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  return [form, handLeInputChange, reset];
};
