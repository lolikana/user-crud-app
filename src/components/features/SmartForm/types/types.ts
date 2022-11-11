import { ChangeEvent, HTMLInputTypeAttribute, ReactNode } from 'react';
import {
  FieldValues,
  SubmitHandler,
  UseFormProps,
  UseFormRegister
} from 'react-hook-form';

export type TForm<TFormValues extends FieldValues> = {
  options: UseFormProps<TFormValues>;
  onSubmit: SubmitHandler<TFormValues>;
  children: ReactNode;
  submitBtn: string;
};

export type TInput = {
  register?: UseFormRegister<FieldValues>;
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
};

export type TRadio = Omit<TInput, 'type' | 'label'> & {
  id: 'radioDefault1' | 'radioDefault2';
  value: 'Active' | 'Pending';
  classRadio: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
