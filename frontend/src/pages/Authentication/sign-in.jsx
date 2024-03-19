import { SignIn } from "@clerk/clerk-react"
 
export default function SignInPage() {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <SignIn />
    </div>
  );
}