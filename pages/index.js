import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Welcome to VinceNet</h1>
      <p>Your business solution hub.</p>
      
      {!session ? (
        <div>
          <h2>Please sign in to access exclusive features.</h2>
          <button onClick={() => signIn()}>Sign In</button>
          <button onClick={() => signIn('credentials')}>Sign Up</button>
        </div>
      ) : (
        <div>
          <h2>Welcome back, {session.user.email}</h2>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      )}
    </div>
  );
}
