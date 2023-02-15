import './HeroLandingPage.css';

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
                        <img className='img' src='./images/charity.jpg'/>
                    </div>
                </div>
                <div className='sampleItems'>
                    <h1>sample items to donate</h1>
                </div>
                <div className='buttons'>
                    <h1>buttons</h1>
                </div>
                <div className='facts'>
                    <h1>facts</h1>
                </div>
            </div>
    )
}