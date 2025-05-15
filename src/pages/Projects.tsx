import bookTrackLogo from '../assets/img/logo_bookWorm.jpeg';
import libraryPic from '../assets/img/libraryApp.png';
import keeperPic from '../assets/img/keeperPic.jpg';
import destinyCalculatorPic from '../assets/img/destinyPic.jpg';

function Projects() {
  return (
    <section id="projects" >

        <div className="hero bg-base-200 min-h-screen" id='personalBookTrackerProject'>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={bookTrackLogo}
              className="max-w-sm rounded-lg shadow-2xl"
              id='projectLogo'
            />
            <div>
              <h1 className="text-5xl font-bold">Personal Book Tracker</h1>
              <p className="py-4 text-lg max-w-xl">
                An intelligent, intuitive web platform crafted for bibliophiles who treat their TBR like sacred scripture. 
                This app empowers users to curate and monitor their reading lists, track progress with ease, and receive tailored 
                AI-driven book recommendations. Designed with scalability in mind, it supports both individual readers and librarians 
                through features like inventory control, availability status, and administrative oversight.              
              </p>
              <p className="text-base text-gray-500 mb-4">Tech Stack: React, TypeScript, Firebase (Firestore), Node.js</p>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    window.open(
                      'https://github.com/Witch121/book-recommendation-full',
                      '_blank'
                    )}
                  >
                  GitHub
                </button>           
              </div>
          </div>
        </div>

        <div className="hero bg-base-200 min-h-screen" id='smartLibraryProject'>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={libraryPic}
              className="max-w-sm rounded-lg shadow-2xl"
              id='projectLogo'
            />
            <div>
              <h1 className="text-5xl font-bold mb-4">Smart Library Web App</h1>
              <p className="py-4 text-lg max-w-xl">
                A full-featured digital library system that feels smarter than your average librarian (but with better UX). 
                It enables efficient book management, intuitive search, dynamic lending systems, and recommendations via AI. 
                Built to streamline the reader-librarian interaction and make every checkout feel like a tech-powered ritual.
              </p>
              <p className="text-base text-gray-500 mb-4">Tech Stack: React, TypeScript, Firebase, Gemini AI</p>
              <button
                className="btn btn-primary"
                onClick={() => window.open('https://github.com/Witch121/smart-library', '_blank')}
              >
                GitHub
              </button>            
            </div>
          </div>
        </div>

        <div className="hero bg-base-200 min-h-screen" id='keeperAppProject'>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={keeperPic}
              className="max-w-sm rounded-lg shadow-2xl"
              id='projectLogo'
            />
            <div>
              <h1 className="text-5xl font-bold mb-4">Keeper Web App</h1>
                <p className="py-4 text-lg max-w-xl">
                  A clean, distraction-free note-taking experience inspired by Google Keep but with more soul. 
                  Created during the Udemi Full Stack course, this minimalist app allows users to capture thoughts quickly and 
                  beautifully. A great showcase of responsive design and component structure for early product ideation.
                </p>
                <p className="text-base text-gray-500 mb-4">Tech Stack: React</p>
              <button
                className="btn btn-primary"
                onClick={() => window.open('https://github.com/Witch121/keeper-app', '_blank')}
              >
                GitHub
              </button>            
            </div>
          </div>
        </div>

        <div className="hero bg-base-200 min-h-screen" id='DestinyCalculatorProject'>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={destinyCalculatorPic}
              className="max-w-sm rounded-lg shadow-2xl"
              id='projectLogo'
            />
            <div>
              <h1 className="text-5xl font-bold mb-4">Destiny Calculator Web App</h1>
              <p className="py-4 text-lg max-w-xl">
                A quirky personal project where logic meets mysticism. This numerology calculator generates a “destiny number” 
                based on name and birthdate, bringing together basic algorithmic design and playful UX. It’s a great example of 
                mixing clean frontend logic with a tongue-in-cheek user journey.
              </p>
              <p className="text-base text-gray-500 mb-4">Tech Stack: HTML, CSS, JavaScript</p>
              <button
                className="btn btn-primary"
                onClick={() => window.open('https://github.com/Witch121/destiny_calculator', '_blank')}
              >
                GitHub
              </button>            
            </div>
          </div>
        </div>
      </section>
    ) 
}
export default Projects;