import React, { createElement, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { TForm } from './types/types';

const SmartForm = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>
>({
  showBtn,
  options,
  onSubmit,
  children
}: TForm<TFormValues>) => {
  const methods = useForm({
    ...options
  });
  const {
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful }
  } = methods;

  useEffect(() => {
    if (!isSubmitSuccessful) return;
    reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid items-center gap-4 py-5 md:grid-cols-6 lg:grid-cols-12"
      >
        {Array.isArray(children)
          ? children.map(child => {
              return child.props.name
                ? createElement(child.type, {
                    ...{
                      ...child.props,
                      key: child.props.name + child.props.id
                    }
                  })
                : child;
            })
          : children}
        {showBtn && (
          <div className="container mx-auto md:col-span-6 lg:col-start-4 lg:row-end-4">
            <input
              defaultValue={showBtn}
              type="Submit"
              className="w-full cursor-pointer rounded-md border bg-green-500 py-2 px-4 text-white hover:border-green-500 hover:bg-gray-50 hover:text-gray-800"
            />
          </div>
        )}
      </form>
    </FormProvider>
  );
};

export default SmartForm;
