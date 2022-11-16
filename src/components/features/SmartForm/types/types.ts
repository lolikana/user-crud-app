import { ChangeEvent, HTMLInputTypeAttribute, ReactNode } from 'react';
import { FieldValues, SubmitHandler, UseFormProps } from 'react-hook-form';

export type TForm<TFormValues extends FieldValues> = {
  options: UseFormProps<TFormValues>;
  onSubmit: SubmitHandler<TFormValues>;
  children: ReactNode;
  showBtn?: string;
};

export type TInput = {
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
  value?: string;
};

export type TRadio = Omit<TInput, 'type' | 'label' | 'register'> & {
  id: 'radioDefault1' | 'radioDefault2';
  value: 'Active' | 'Pending';
  classRadio: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
