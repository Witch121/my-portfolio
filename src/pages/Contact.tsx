// import unicornLogo from '../assets/logos/main-logo.jpg';
import gitHubLogoLink from '../assets/logos/gitHub.png';
import linkedinLogoLink from '../assets/logos/linkedin.png';
import fbLogoLink from '../assets/logos/facebook.png';

function Contact() {
  return (
    <>
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <h2>Doing web staff since I decided so</h2><br/>
        <a className="link link-hover" href="https://www.flaticon.com/">Contribution</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a id='gitHubLink' href='https://github.com/' target="_blank">
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
          <a id='fbLink' href='https://www.facebook.com/' target="_blank">
            <img 
            src={fbLogoLink}
              width="24"
              height="24"
              className="fill-current"
              />

          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - Created with cooperation with any resource avaliable 🦄</p>
      </aside>
    </footer>
    </>
    
  )}

  export default Contact;