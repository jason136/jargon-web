"use client";
import { supabase } from '~/utils/supabase';
import { useState } from "react";
import TextInput from "~/components/primitive/TextInput";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handlePassSubmit(){
    if(password != confirmPassword){
      setError(true);
      setErrorMessage("passwords don't match, please try again");
      return;
    }
    if(password.length < 6){
      setError(true);
      setErrorMessage("passwords must be at least 6 characters long, please try again");
      return;
    }
    const { data, error } = await supabase.auth.updateUser({
      password: password
    })
    if(error == null){
      setError(false);
      setSuccess(true);
    }
    else{
      setError(true);
      setErrorMessage("Something went wrong on our end. Please try again!")
    }
  }
  
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h2 className="font-quicksand text-center text-3xl font-bold text-neutral-700">
        Reset Your Password
      </h2>

      <div className="w-1/3 min-w-80 space-y-3 pt-6 pb-8">
        <TextInput
          labelText="New Password"
          inputText="An 8+ character password"
          type="password"
          onUpdate={(text) => setPassword(text)}
        />
        <TextInput
          labelText="Confirm New Password"
          inputText="Don't forget it!"
          type="password"
          onUpdate={(text) => setConfirmPassword(text)}
        />
      </div>

      <button
        className="flex items-center justify-center rounded-[20px] bg-indigo-400"
        onClick={handlePassSubmit}
      >
        <div className="px-10 py-2 font-quicksand text-center text-[15px] font-semibold text-white">
          Reset Password!
        </div>
      </button>
      {error ? <div className="font-quicksand text-center text-neutral-700 my-2">{errorMessage}</div> :''}
      {success ? <div className="font-quicksand text-center text-neutral-700 my-2">Password successfully reset! Close this window and log in from the extension.</div> :''}
    </div>
  );
}
