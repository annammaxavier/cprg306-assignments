import { AuthContextProvider } from "./_utils/auth_context";
 
export default function Layout({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};