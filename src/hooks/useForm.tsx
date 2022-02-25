import { ChangeEvent, useState } from "react";

interface filter {
  year: string;
  title: string;
  type: string;
}

export const useForm = (initialState: any) => {
  const [form, setForm] = useState<any>(initialState);

  const reset = () => {
    setForm(initialState);
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };
  return [form, handleInputChange, reset, setForm];
};
