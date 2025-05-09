import parisCard from "../assets/img/paris.jpg";
import cupWithBookCard from "../assets/img/cupWithBook.jpg";
import mushrumsCard from "../assets/img/mushrooms.jpg"
import lavanderFieldCard from "../assets/img/lavenderField.jpg"
import wavesCard from "../assets/img/waves.jpg"

function About() {
  return (
    <>

    <div className="carousel w-full h-[70vh] rounded-box overflow-hidden relative">
      {[
        {
          id: "slide1",
          img: wavesCard,
          text: "Hi, I'm a passionate full-stack web developer.",
        },
        {
          id: "slide2",
          img: parisCard,
          text: "I love working with React, TypeScript, and beautiful UI. As well as Node.js, Express, and Firebase",
        },
        {
          id: "slide3",
          img: mushrumsCard,
          text: "I also care about accessibility, performance, and clean code.",
        },
        {
          id: "slide4",
          img: lavanderFieldCard,
          text: "Let’s build something great together 🚀",
        },
        {
          id: "slide5",
          img: cupWithBookCard,
          text: "Fun fact: I love to play video games and read.",
        },
      ].map((slide, index, arr) => {
        const prev = `#${arr[(index - 1 + arr.length) % arr.length].id}`;
        const next = `#${arr[(index + 1) % arr.length].id}`;

        return (
          <div
            key={slide.id}
            id={slide.id}
            className="carousel-item relative w-full"
          >
            <img
              src={slide.img}
              className="w-full object-cover blur-[2px] brightness-75"
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg max-w-2xl">
                {slide.text}
              </h2>
            </div>
            <div className="absolute left-5 right-5 bottom-5 flex justify-between">
              <a href={prev} className="btn btn-circle">❮</a>
              <a href={next} className="btn btn-circle">❯</a>
            </div>
          </div>
        );
      })}
    </div>

    </>
  )};

export default About;