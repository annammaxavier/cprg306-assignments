// Add the "use client" directive to mark this as a Client Component
"use client"; 
import firebase from './week-9/_utils/firebase';
import { useUserAuth } from './week-9/_utils/auth-context';  // Import useUserAuth hook
import { useRouter } from 'next/navigation';  // Use next/navigation for useRouter in Client Components
import { useEffect } from 'react';

export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth(); // Access user and authentication methods
  const router = useRouter(); // Router hook for navigation

  // If user is logged in, redirect to shopping list page
  useEffect(() => {
    if (user) {
      router.push('/shopping-list');  // Correct way to navigate in Next.js 13+ Client Components
    }
  }, [user, router]);

  return (
    <div>
      {!user ? (
        // If no user, show login button
        <button onClick={gitHubSignIn}>Login with GitHub</button>
      ) : (
        // If user is logged in, show welcome message and logout button
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={firebaseSignOut}>Logout</button>
        </div>
      )}
    </div>
  );
};
