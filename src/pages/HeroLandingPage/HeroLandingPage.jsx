import './HeroLandingPage.css';
import { Link } from 'react-router-dom';

export default function HeroLandingPage() {
    return (
            <div className="body">
                <div className='heroBanner'>
                    <div className='about'>
                        <div className='text'>
                            <h1>Help make a difference with your donation</h1>
                            <h1>Help someone in need today</h1>
                            <br />
                            <button className='learnBtn'>Learn More</button>
                        </div>
                    </div>
                    <div className='imgDiv'>
                        <img alt="" className='img' src='./images/charity.jpg'/>
                    </div>
                </div>
                <h1 className='sampleText'>These all can go a long way</h1>
                <div className='sampleItems'>
                    <img alt="" src='./images/image1.png'/>
                    <img alt="" src='./images/image2.png'/>
                    <img alt="" src='./images/image3.png'/>
                    <img alt="" src='./images/image4.png'/>
                </div>
                <h1 className='sampleText2'>How you can help</h1>
                <div className='buttons'>
                    <div className='roundBtn'>
                        <Link to="/hero/create">
                            <img alt="" src="./images/icon3.png" />
                        </Link>
                    </div>
                    <div className='roundBtn'>
                        <Link>
                            <img alt="" src="./images/icon.png" />
                        </Link>
                    </div>
                    <div className='roundBtn'>
                        <Link>
                            <img alt="" src="./images/icon2.png" />
                        </Link>
                    </div>
                </div>
                <div className='facts'>
                    <h1>facts</h1>
                </div>
            </div>
    )
}