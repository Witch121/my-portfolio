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
                A smart and user-friendly web app designed for book lovers to manage their reading lists, track progress, 
                and get personalized recommendations.
                Built using React, Firebase, and Node.js, the app supports both regular users and librarians, 
                featuring AI-generated suggestions, book availability tracking, and admin-level data management.              
              </p>
              <p className="text-base text-gray-500 mb-4">Built with React, TypeScript, Firestore, and Gemini AI</p>
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
                A modern library management system designed for both librarians and readers. It features book search, 
                borrowing, availability tracking, and AI-powered recommendations.
              </p>
              <p className="text-base text-gray-500 mb-4">Built with React, TypeScript, Firestore, and Gemini AI</p>
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
                  A minimalist note-taking app inspired by Google Keep, built as part of the Usemi web development course. 
                  It allows users to create, view, and delete notes in a clean, responsive interface.
                </p>
                <p className="text-base text-gray-500 mb-4">Built with React</p>
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
                A playful numerology-based calculator that computes a "destiny number" from a user's name and birth date. 
                Built as a personal side project to explore logic implementation and simple form handling in React.
              </p>
              <p className="text-base text-gray-500 mb-4">Built with React and JavaScript</p>
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