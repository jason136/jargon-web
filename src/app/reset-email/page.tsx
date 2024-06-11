"use client";

import { useState } from "react";
import TextInput from "~/components/primitive/TextInput";
import {supabase} from "~/utils/supabase";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [waitMessage, setWaitMessage] = useState(false);

  async function handleEmailSubmit(){
    setError(false);
    
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'https://jargonlearn.com/reset-password',
    })

    if(error === null){
      setWaitMessage(true);
    }
    else{
      setError(true);
    }
    console.log("data", data)
    console.log("error",error)

  }
  
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h2 className="font-quicksand text-center text-3xl font-bold text-neutral-700">
        Reset Your Password
      </h2>
      <div className="w-1/3 min-w-80 space-y-3 pt-6 pb-8">
        <TextInput
          labelText="Email"
          inputText="Enter your email"
          type="email"
          onUpdate={(text) => setEmail(text)}
        />
      </div>

      <button
        className="flex items-center justify-center rounded-[20px] bg-indigo-400"
        onClick={handleEmailSubmit}
      >
        <div className="px-10 py-2 font-quicksand text-center text-[15px] font-semibold text-white">
          Reset Password!
        </div>
      </button>
      {error ? <div className="font-quicksand text-center text-neutral-700 my-2">This email isn&apos;t registered with us, please try again.</div> : ''}
      {waitMessage ? <div className="font-quicksand text-center text-neutral-700 my-2">
        You should shortly receive an email to reset your password.
        Be sure to check your spam folder, or contact us for help if you haven&apos;t! </div> : ''}
    </div>
  );
}
