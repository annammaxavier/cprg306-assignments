// shopping-list/page.js
"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ShoppingListPage() {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/week-9"); // Redirect to login page if not logged in
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div>
      <h1>Shopping List</h1>
      {/* Render your shopping list items here */}
      <button onClick={firebaseSignOut}>Logout</button>
    </div>
  );
}
