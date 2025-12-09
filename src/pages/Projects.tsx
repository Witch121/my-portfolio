import bookTrackLogo from '../assets/img/logo_bookWorm.jpeg';
import libraryPic from '../assets/img/libraryApp.png';
// import keeperPic from '../assets/img/keeperPic.jpg';
import destinyCalculatorPic from '../assets/img/destinyPic.jpg';
import vocabPic from '../assets/img/words.jpg'

function Projects() {
  return (
    <section id="projects" >

        <div className="hero bg-base-200 min-h-screen" id='fancyVocabularyProject'>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={vocabPic}
              className="max-w-sm rounded-lg shadow-2xl"
              id='projectLogo'
            />
            <div>
              <h1 className="text-5xl font-bold mb-4 projectName">Vocabulary Trainer Web App</h1>
                <p className="py-4 text-lg max-w-xl">
                  A beautifully minimal vocabulary and reflection app for writers, language lovers, and introspective thinkers. 
                  Offers daily prompts to stretch your mind, track your words, and store everything in real-time with Firebase and Firestore. 
                  Built for those who treat language like an art form—and want their interface to feel the same.
                </p>
                <p className="text-base text-gray-500 mb-4">Tech Stack: React, TypeScript, Firebase, Tailwind CSS </p>
              <button
                className="btn btn-primary"
                onClick={() => window.open('https://fancy-vocab-trainer.web.app/', '_blank')}
              >
                Try it out
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
              <h1 className="text-5xl font-bold mb-4 projectName">Syntactic structure of Ukrainian</h1>
              <p className="py-4 text-lg max-w-xl">
                A research-driven project exploring the syntactic structure of Ukrainian, with a focus on how native speakers use and interpret pronouns. 
                If you're a native Ukrainian speaker, I invite you to contribute by filling out a short form — your insights help 
                uncover patterns unique to the language.
              </p>
              <p className="text-base text-gray-500 mb-4">For Ukrainian Native Speakers</p>
              <button
                className="btn btn-primary"
                onClick={() => window.open('https://forms.office.com/e/qJBp2NYKvY', '_blank')}
              >
                Form
              </button>            
            </div>
          </div>
        </div>

        <div className="hero bg-base-200 min-h-screen" id='personalBookTrackerProject'>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={bookTrackLogo}
              className="max-w-sm rounded-lg shadow-2xl"
              id='projectLogo'
            />
            <div>
              <h1 className="text-5xl font-bold projectName">Personal Book Tracker</h1>
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
              <h1 className="text-5xl font-bold mb-4 projectName">Smart Library Web App</h1>
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

      </section>
    ) 
}
export default Projects;