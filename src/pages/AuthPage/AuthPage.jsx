import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
// import BusinessForm from '../../components/BusinessForm/BusinessForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(true);

  return (
      <main className='' style={{backgroundColor: "#F3F3F3"}}>
        <div className='formCont'>
          <div className='heroCont'>
            <div className='heroText'> 
              <h3>In our days of working with our local food kitchens, we became aware of a key issue that hindered our ability to give back: a steady supply of food donated to our operation. Our mission at Hunger Hero is to connect food banks, community kitchens, or any organizations looking to provide food to us all without barriers with local farms, grocers, or any organizations with excess food looking to put their otherwise wasted food to good use. </h3>
            </div>
          </div>
          { showSignUp ?
          <div >
            <LoginForm setUser={setUser} setShowSignUp={setShowSignUp} showSignUp={showSignUp}/>
          </div>
          :
          <div style={{justifyContent: 'center'}}>
            <SignUpForm setUser={setUser} setShowSignUp={setShowSignUp} showSignUp={showSignUp} />
          </div>
          }
        </div>
      </main>
  );
}