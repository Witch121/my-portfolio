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
            text: "Hi, I’m a proficient full-stack web developer with a strong passion for learning and building impactful solutions.",
          },
          {
            id: "slide2",
            img: parisCard,
            text: "I work confidently with React, TypeScript, Node.js, Firebase, and modern web technologies to create fast, intuitive apps.",
          },
          {
            id: "slide3",
            img: mushrumsCard,
            text: "I love to learn and be effitent, so even if i`m not familiar with a tool, I can learn it quickly and use it effectively.",
            
          },
          {
            id: "slide4",
            img: lavanderFieldCard,
            text: "My cross-disciplinary background shapes how I approach problems — with curiosity, clarity, and a drive to deliver.",
          },
          {
            id: "slide5",
            img: cupWithBookCard,
            text: "Outside of tech, I enjoy beautiful storytelling in video games and books that challenge the way we see the world.",
          },
          {
            id: "slide6",
            img: bookshelfCard,
            text: "My language skills include English (C1), Russian (native), Ukrainian (native), and German (C1) which help me connect with diverse communities.",
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