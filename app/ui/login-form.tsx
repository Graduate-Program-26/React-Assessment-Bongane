"use client";

import { authClient, signIn } from "../lib/auth-client";

export default function LoginForm() {
  return (
    <div className="h-screen flex  justify-center items-center">
      <div className="container m-150 border p-5 rounded-md ">
        <form action="" className="flex flex-col ">
          <h1 className="text-2xl text-center">Login</h1>
          <input
            type="text"
            placeholder="Username"
            className="mt-10 mb-10 border p-5 rounded-md"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className=" mb-10 border p-5 rounded-md"
            required
          />
          <button
            type="submit"
            className="border rounded-md"
            onClick={() =>
              authClient.signIn.email({
                email: "",
                password: "",
              })
            }
          >
            Login
          </button>
        </form>
        <button className="w-full border rounded-md mt-5 p-2 justify-items-center cursor-pointer" onClick={() => signIn()}>Login with github</button>
      </div>
    </div>
  );
}
