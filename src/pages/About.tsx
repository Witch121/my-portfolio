import parisCard from "../assets/img/paris.jpg";
import cupWithBookCard from "../assets/img/cupWithBook.jpg";
import mushrumsCard from "../assets/img/mushrooms.jpg";
import lavanderFieldCard from "../assets/img/lavenderField.jpg";
import wavesCard from "../assets/img/waves.jpg";
import bookshelfCard from "../assets/img/bookshelf.jpg";

function About() {
  return (
    <>

    <div className="carousel w-full h-[70vh] rounded-box overflow-hidden relative" id="about">
      {[
        {
          id: "slide1",
          img: wavesCard,
          text: "Hi, I’m a proficient full-stack developer with a passion for building meaningful, human-centered digital experiences.",
        },
        {
          id: "slide2",
          img: parisCard,
          text: "I work confidently with React, TypeScript, Node.js, Firebase, and modern web technologies to craft fast, intuitive web applications.",
        },
        {
          id: "slide3",
          img: mushrumsCard,
          text: "I’m a quick learner and thrive in unfamiliar territory. If I don’t know a tool yet, give me an afternoon and I’ll be using it like I invented it.",
        },
        {
          id: "slide4",
          img: lavanderFieldCard,
          text: "My cross-disciplinary background — from nursing to linguistics — fuels my approach to development: thoughtful, adaptive, and deeply curious.",
        },
        {
          id: "slide5",
          img: cupWithBookCard,
          text: "When I’m not coding, I explore stories — in games, books, and weird dreams — that challenge how we see the world and ourselves.",
        },
        {
          id: "slide6",
          img: bookshelfCard,
          text: "I speak English (C1), Ukrainian (native), Russian (native), and German (C1), which helps me build bridges between code and community.",
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