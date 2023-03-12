import "./HeroLandingPage.css";
import { Link } from "react-router-dom";

export default function HeroLandingPage() {
  return (
    <div className="body">
      <div className="heroBanner">
        <div className="about">
          <div className="text">
            <h1>Help make a difference with your donation</h1>
            <h1>Help someone in need today</h1>
            <br />
            <Link to="/about">
              <button className="learnBtn">Learn More</button>
            </Link>
          </div>
        </div>
        <div className="imgDiv">
          <img className="img" src="./images/charity2.png" alt="" />
        </div>
      </div>
      <h1 className="sampleText">These all can go a long way</h1>
      <div className="sampleItems">
        <img src="./images/image1.png" alt="" />
        <img src="./images/image2.png" alt="" />
        <img src="./images/image.png" alt="" />
        <img src="./images/image5.png" alt="" />
      </div>
      <h1 className="sampleText2">How you can help</h1>
      <div className="buttons">
        <div className="roundBtn">
          <Link to="/hero/create">
            <img src="./images/icon3.png" alt="" />
          </Link>
        </div>
        <div className="roundBtn">
          <Link to="/requests">
            <img src="./images/icon.png" alt="" />
          </Link>
        </div>
        <div className="roundBtn">
          <Link>
            <img src="./images/icon2.png" alt="" />
          </Link>
        </div>
      </div>
      <div className="buttonsText">
        <h2>Create a post</h2>
        <h2>Accept pickup request</h2>
        <h2>Donate goods</h2>
      </div>
      <div className="facts">
        <h1>facts</h1>
      </div>
    </div>
  );
}
