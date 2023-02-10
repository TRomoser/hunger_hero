import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
// import BusinessForm from '../../components/BusinessForm/BusinessForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <main className='' style={{backgroundColor: "#F3F3F3"}}>
      <h1 className='header'>Sign Up</h1>
      { showSignUp ?
      <div >
      <LoginForm setUser={setUser} setShowSignUp={setShowSignUp}/> 
      </div>
      :
      <div>
      <SignUpForm setUser={setUser} setShowSignUp={setShowSignUp} />    
      </div>
      }
      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Sign Up' : 'Log In'}</button>

    </main>
  );
}