import './Footer.css';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footerLogo'>
                <img className='logoImg' src="./images/logo.png"/>
            </div>
            <ul className='footerLinks'>
                <li className='link'>About</li>
                <li className='link'>Contact Us</li>
                <li className='link'>Support</li>
            </ul>
        </div>
    )
}