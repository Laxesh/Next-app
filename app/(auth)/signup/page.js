import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function SignupPage() {
  return (
    <>
      <div className="container">
        <div className="mx-auto max-w-md mt-20 text-slate-800 p-4">
          <h1 className="text-3xl text-center">Create an account</h1>
          <p className="text-center p-2">Enter your email below to create your account</p>
          <form className="flex flex-col gap-4 pt-4">
            <div className="flex flex-col gap-2">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="name@example.com"
                className="border text-black border-gray-300 rounded-lg px-4 py-2 "
              />
            </div>
            <button type="submit" className="bg-slate-800 text-white rounded-lg px-4 py-2">
              Sign Up
            </button>
            <div className="text-center">
              <p>or Continue With</p>
            </div>
            <button type="submit" className="bg-slate-800 text-white rounded-lg px-4 py-2 ">
              Github
            </button>
            <p className="p-2 underline text-center">
              Already have an account? <Link href="/login">Log In</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
