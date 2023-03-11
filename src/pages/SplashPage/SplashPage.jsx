import "./SplashPage.css";
import { useEffect } from 'react';

export default function SplashPage({ setShowSplash, showSplash }) {
  // the user has to press the button on the splash page to move onto the login/signup process
  // so this useEffect automatically renders the login after a certain time
  // unsure if we want to keep this
  useEffect(() => {setTimeout(() => {setShowSplash(!showSplash)}, 7000)}, [])


  return (
    <section class="masthead" role="img" aria-label="Image Description">
      <h1 className="hero-title">
        Hunger Hero
      </h1>
        <button onClick={() => setShowSplash(!showSplash)}>
          <div className="hero-button">
            When a hero comes along
          </div>
        </button>
    </section>
  );
}
