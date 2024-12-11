"use client";


import { useUserAuth } from "./_utils/auth_context"; // Import authentication context
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const SignIn = async () => {
    await gitHubSignIn();
  };

  const SignOut = async () => {
    await firebaseSignOut();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[90%] max-w-lg bg-white p-6 rounded-lg shadow-md">
        {user ? (
          <>
            <h1 className="text-xl font-bold text-center mb-4">Shopping List App</h1>
            <p className="text-center mb-6">
              Signed in as <span className="font-semibold">{user.email}</span>.
            </p>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition mb-4 w-full"
              onClick={SignOut}
            >
              Sign out
              </button>
            <Link href="/week-10/shopping-list">
              <button className="block text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition w-full">
                Continue to your Shopping List
              </button>
            </Link>
          </>
        ) : (
          <>
            <h1 className="text-xl font-bold text-center mb-4">Shopping List App</h1>
            <p className="text-center mb-6">Sign in with GitHub to continue.</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition w-full"
              onClick={SignIn}
            >
              Sign in with GitHub
            </button>
          </>
        )}
      </div>
    </div>
  );
};
