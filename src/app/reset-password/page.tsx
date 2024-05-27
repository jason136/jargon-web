"use client";

import { useState } from "react";
import TextInput from "~/components/primitive/TextInput";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
        <TextInput
          labelText="New Password"
          inputText="An 8+ character password"
          type="email"
          onUpdate={(text) => setPassword(text)}
        />
        <TextInput
          labelText="Confirm New Password"
          inputText="Don't forget it"
          type="email"
          onUpdate={(text) => setConfirmPassword(text)}
        />
      </div>

      <button
        className="flex items-center justify-center rounded-[20px] bg-indigo-400"
      >
        <div className="px-10 py-2 font-quicksand text-center text-[15px] font-semibold text-white">
          Reset Password!
        </div>
      </button>
    </div>
  );
}
