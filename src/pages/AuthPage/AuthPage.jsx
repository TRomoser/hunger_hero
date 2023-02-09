import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <h1>Hunger Hero</h1>
      { showSignUp ?
      <LoginForm setUser={setUser} /> :
          <SignUpForm setUser={setUser} />
          
          
      }
      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Sign Up' : 'Log In'}</button>
    </main>
  );
}