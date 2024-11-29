import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <>
      <div className="container mx-auto">
        <div className="text-slate-800 mx-auto max-w-md mt-20 p-4">
          <h1 className="text-2xl font-bold text-center">Welcome back</h1>
          <p className="text-center p-2">Enter your email to sign in to your account </p>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 ">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="name@example.com"
                className="border text-black border-gray-300 rounded-lg px-4 py-2 "
              />
            </div>
            <button type="submit" className="bg-slate-800 text-white  rounded-lg px-4 py-2 ">
              Sing in With Email
            </button>
            <div className="text-center">
              <p>or Continue With</p>
            </div>
            <button type="submit" className="bg-slate-800 text-white rounded-lg px-4 py-2 ">
              Github
            </button>

            <p className="text-center underline p-2">
              Don't have an account? <Link href="/signup">Sing Up</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
