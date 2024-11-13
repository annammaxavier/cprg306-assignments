// profile.js
"use client";

import { useUserAuth } from "./week-9/_utils/auth-context";
import Link from "next/link";

export default function ProfilePage() {
  const { user } = useUserAuth();

  if (!user) return <p>Please log in to view your profile.</p>;

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.displayName}</p>
      <p>Email: {user.email}</p>
      {user.photoURL && <img src={user.photoURL} alt="Profile" />}
      <p>
        <a href={user.providerData[0]?.uid ? `https://github.com/${user.providerData[0].uid}` : "Ov23liPMsjOZIXkebJqW"}>
          GitHub Profile
        </a>
      </p>
      <Link href="./week-9/shopping-list">Go to Shopping List</Link>
    </div>
  );
};
