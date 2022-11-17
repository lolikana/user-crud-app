import Head from 'next/head';
import { useState } from 'react';

import { AddUserForm, TEmployee, UsersTable } from '@/components/elements/employee';
import EditUserForm from '@/components/elements/employee/EditUserForm';
import { OnErrorMsg, OnSuccessMsg } from '@/components/features/Form';
import { defaultUserValues } from '@/lib/data';

export default function Home() {
  const [formIsShown, setFormIsSown] = useState(false);
  const [editFormIsShown, setEditFormIsSown] = useState(false);
  const [onSuccess, setOnSuccess] = useState<boolean>(false);
  const [onError, setOnError] = useState<boolean>(false);
  const [pickedEditUser, setPickEditUser] = useState<TEmployee>(defaultUserValues);

  const toggleForm = () => {
    setOnSuccess(false);
    setOnError(false);
    setEditFormIsSown(false);
    setFormIsSown(prevState => !prevState);
  };

  const toggleShowEditForm = (datas: TEmployee) => {
    if (datas._id === pickedEditUser._id) {
      setEditFormIsSown(false);
      setPickEditUser(defaultUserValues);
    } else {
      setOnSuccess(false);
      setOnError(false);
      setFormIsSown(false);
      setEditFormIsSown(true);
      setPickEditUser(datas);
    }
  };

  const toogleCloseSuccessMsg = () => {
    setOnSuccess(false);
  };

  const toogleCloseErrorMsg = () => {
    setOnError(false);
    setFormIsSown(true);
  };

  const toogleSuccessMsg = () => {
    setOnSuccess(true);
    setFormIsSown(false);
  };

  const toogleErrorMsg = () => {
    setOnError(true);
    setFormIsSown(false);
  };

  return (
    <>
      <Head>
        <title>CRUD Application</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-slate-500 px-4">
        <h1 className="py-10 text-center text-xl font-bold text-slate-300 md:text-5xl">
          Employee Management
        </h1>
        <div className="container mx-auto flex flex-col justify-between py-5">
          <div className="left flex gap-3">
            <button
              onClick={toggleForm}
              className="relative flex items-center gap-2 rounded-md border bg-indigo-500 py-2 px-4 text-white hover:border-indigo-500 hover:bg-gray-50 hover:text-gray-800"
            >
              Add Employee
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 45 45"
                fill="currentColor"
                className="self-baseline"
              >
                <path d="M36.5 28v-6.5H30v-3h6.5V12h3v6.5H46v3h-6.5V28ZM18 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM2 40v-4.7q0-1.75.875-3.175Q3.75 30.7 5.4 30q3.75-1.65 6.675-2.325Q15 27 18 27t5.9.675q2.9.675 6.65 2.325 1.65.75 2.55 2.15.9 1.4.9 3.15V40Zm3-3h26v-1.7q0-.8-.45-1.525-.45-.725-1.2-1.075-3.55-1.65-6-2.175Q20.9 30 18 30q-2.9 0-5.375.525T6.6 32.7q-.75.35-1.175 1.075Q5 34.5 5 35.3Zm13-16.05q1.95 0 3.225-1.275Q22.5 18.4 22.5 16.45q0-1.95-1.275-3.225Q19.95 11.95 18 11.95q-1.95 0-3.225 1.275Q13.5 14.5 13.5 16.45q0 1.95 1.275 3.225Q16.05 20.95 18 20.95Zm0-4.5ZM18 37Z" />
              </svg>
            </button>
          </div>
          {/* collapsable form */}
          {onSuccess ? (
            <OnSuccessMsg message="New Employee Added" onClick={toogleCloseSuccessMsg} />
          ) : onError ? (
            <OnErrorMsg message="Error, missing datas" onClick={toogleCloseErrorMsg} />
          ) : formIsShown ? (
            <div className="container mx-auto">
              <AddUserForm onSuccessMsg={toogleSuccessMsg} onErrorMsg={toogleErrorMsg} />
            </div>
          ) : (
            editFormIsShown && (
              <EditUserForm
                defaultUserDatas={pickedEditUser}
                onSuccessMsg={toogleSuccessMsg}
                onErrorMsg={toogleErrorMsg}
              />
            )
          )}
          {/* table */}
          <UsersTable showEditForm={toggleShowEditForm} />
        </div>
      </main>
    </>
  );
}
