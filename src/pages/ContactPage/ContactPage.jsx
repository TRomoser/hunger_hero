import './ContactPage.css'

export default function ContactPage() {
    return (
        <div className="body">
            <div className="taylor">
                <h2 className='name'><strong>Taylor Romoser</strong></h2>
                <h2>Software Engineer</h2>
                <a href="https://github.com/TRomoser" target="_blank"><img className="icon" src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="GitHub"/></a>
                <a href="https://www.linkedin.com/in/taylor-romoser/" target="_blank"><img className="icon" src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="LinkedIn"/></a>
                <a
                    rel="noreferrer"
                    target="_blank"
                    class="cta-btn cta-btn--resume"
                    href="mailto:TaylorRomoser@gmail.com"
                    ><img className="icon" src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email"/>
                </a>
            </div>
            <div className="chase">
                <h2 className='name'><strong>Chase Allman-Knieper</strong></h2>
                <h2>Software Engineer</h2>
                <a href="https://github.com/achasek" target="_blank"><img className="icon" src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="GitHub"/></a>
                <a href="https://www.linkedin.com/in/chase-ak/" target="_blank"><img className="icon" src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="LinkedIn"/></a>
                <a
                    rel="noreferrer"
                    target="_blank"
                    class="cta-btn cta-btn--resume"
                    href="mailto:chaseknieper@gmail.com"
                    ><img className="icon" src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email"/>  
                </a>
            </div>
            <div className="john">
                <h2 className='name'><strong>John McCants</strong></h2>
                <h2>Software Engineer</h2>
                <a href="https://github.com/johnmccants002" target="_blank"><img className="icon" src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="GitHub"/></a>
                <a href="https://www.linkedin.com/in/johnmccants" target="_blank"><img className="icon" src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="LinkedIn"/></a>
                <a
                    rel="noreferrer"
                    target="_blank"
                    class="cta-btn cta-btn--resume"
                    href="mailto:johnmccants002@gmail.com"
                    ><img className="icon" src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email"/> 
                </a>
            </div>
        </div>
    )
}