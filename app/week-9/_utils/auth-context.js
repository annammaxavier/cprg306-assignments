import { useState, useEffect, createContext, useContext } from 'react';
import { getAuth, signInWithPopup, signOut, GithubAuthProvider } from 'firebase/auth';
import { auth } from './firebase';  // Assuming you're exporting Firebase auth instance

// Create context for authentication
const AuthContext = createContext();

// Custom hook to access authentication state
export const useUserAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component to provide auth state to the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Initialize auth state on app load
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  // GitHub login
  const gitHubSignIn = async () => {
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('GitHub sign-in error:', error);
    }
  };

  // Firebase logout
  const firebaseSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Sign-out error:', error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, gitHubSignIn, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
}