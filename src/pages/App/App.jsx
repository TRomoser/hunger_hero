import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HeroPostPage from '../HeroPostPage/HeroPostPage';
import HeroHomePage from '../HeroHomePage/HeroHomePage';
import HeroPostsHistory from '../HeroPostsHistory/HeroPostsHistory';
import NavBar from '../../components/NavBar/NavBar';
import ProfilePage from '../ProfilePage/ProfilePage';
import Footer from '../../components/Footer/Footer';
import FoodShowPage from '../FoodShowPage/FoodShowPage'
import HeroLandingPage from '../HeroLandingPage/HeroLandingPage';
import HeroRequestPage from '../HeroRequestPage/HeroRequestPage';
import SplashPage from '../SplashPage/SplashPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const navigate = useNavigate()

  return (
    <main style={{backgroundColor: "#F3F3F3"}}>
      { user ?
      user.userType === 'Hero' ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}\

              
              <Route path="/hero/create" element={<HeroPostPage user={user}/>} />

              <Route path="/" element={<HeroLandingPage />}/>

              <Route path="/profile" element={<ProfilePage user={user}/>}/>

              <Route path="/hero/posts" element={<HeroPostsHistory user={user} />} />

              <Route path="/hero" element={<HeroHomePage user={user} navigate={navigate}/>}/>

              <Route path="/post/:id" element={<FoodShowPage />} />

              <Route path="/requests" element={<HeroRequestPage user={user} navigate={navigate}/>}/>
              
              <Route path="/splash" element={<SplashPage/>} />
            </Routes>
            <Footer />
          </>
          :
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              {/* <Route path="/hungry" element={<HungryHomePage />} /> */}
            </Routes>
            <Footer />
          </>
          :
          <AuthPage setUser={setUser} />
          // <SplashPage/>
      }
    </main>
  );
}
