// import unicornLogo from '../assets/logos/main-logo.jpg';
import gitHubLogoLink from '../assets/logos/gitHub.png';
import linkedinLogoLink from '../assets/logos/linkedin.png';
import fbLogoLink from '../assets/logos/facebook.png';
import emailLogoLink from '../assets/logos/email.png';

function Contact() {
  return (
    <>
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10" id='contact'>
      <nav className="grid grid-flow-col gap-4">
        <h2>Writing code since I realized chaos can be compiled.</h2><br/>
        <a className="link link-hover" href="https://www.flaticon.com/">Contribution</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a id='gitHubLink' href='https://github.com/Witch121' target="_blank">
            <img 
            src={gitHubLogoLink}
              width="24"
              height="24"
              className="fill-current"
              />

          </a>
          <a id='lonkedinLink' href='https://www.linkedin.com/in/daria-shkrabachenko-on-the-way-to-knowledge/' target="_blank">
            <img 
            src={linkedinLogoLink}
              width="24"
              height="24"
              className="fill-current"
              />

          </a>
          <a id='fbLink' href='https://www.facebook.com/DariaSkh' target="_blank">
            <img 
            src={fbLogoLink}
              width="24"
              height="24"
              className="fill-current"
              />

          </a>

          <a id='emailLink' href='mailto:shkrabachenkod@gmail.com' target="_blank">
            <img 
            src={emailLogoLink}
              width="24"
              height="24"
              className="fill-current"
              />

          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - Created in cooperation with any resource avaliable 🦄</p>
      </aside>
    </footer>
    </>
    
  )}

  export default Contact;