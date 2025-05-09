import bookTrackLogo from '../assets/img/logo_bookWorm.jpeg';
import libraryPic from '../assets/img/libraryApp.png';

function Projects() {
  return (
    <section id="projects" >

        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={bookTrackLogo}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Personal Book Tracker</h1>
              <p className="py-6">
                With love for all the booworms, who couldn`t keep up with TBR
              </p>
                <button
                  className="btn btn-primary"
                  onClick={() => window.open('https://github.com/Witch121/book-recommendation-full', '_blank')}
                >
                  GitHub
                </button>            
              </div>
          </div>
        </div>

        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={libraryPic}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Web App for Library</h1>
              <p className="py-6">
                Created for the Librarian and Reader
              </p>
              <p>React, TypeScript, Firestore, Gemini </p>
                <button
                  className="btn btn-primary"
                  onClick={() => window.open('https://github.com/Witch121/smart-library', '_blank')}
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