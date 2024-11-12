// page.js
"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function HomePage() {
  const { user, gitHubSignIn, googleSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/week-9/shopping-list"); // Redirect to shopping list when logged in
    }
  }, [user, router]);

  return (
    <div>
      {!user ? (
        <div>
          <button onClick={gitHubSignIn}>Login with GitHub</button>
          <button onClick={googleSignIn}>Login with Google</button>
        </div>
      ) : (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={firebaseSignOut}>Logout</button>
        </div>
      )}
    </div>
  );
}
