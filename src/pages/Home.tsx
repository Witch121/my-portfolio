import skyBackground from "../assets/img/sky.jpg";

function Home() {
  return (
  <>
    <section className="hero relative min-h-screen overflow-hidden" data-theme="dark">
      <div
        className="absolute inset-0 bg-cover bg-center blur-[3px] brightness-75 transition-transform duration-500 hover:scale-105"
        style={{
          backgroundImage: `url(${skyBackground})`,
          zIndex: 0,
        }}
      />

       <div className="absolute top-4 right-4 z-20">
        <label className="flex items-center gap-2 cursor-pointer">
          <span className="text-sm">🌙</span>
          <input type="checkbox" value="fantasy" className="toggle theme-controller" />
          <span className="text-sm">☀️</span>
        </label>
      </div>

      <div className="hero-content relative z-10 text-center text-white px-4">
        <div>
          <h1 className="text-5xl font-bold mb-6">Personal Portfolio</h1>
          <p className="py-6 text-lg max-w-2xl mx-auto leading-relaxed">
            Hello, I’m Daria.<br />
            I’m a Web Developer focused on clean design and continuous learning.<br />
            If you’re passionate about technology and growth — we’re already on the same page.
          </p>
        </div>
      </div>
      <div className="absolute bottom-6 w-full flex justify-center z-10">
        <div className="menu menu-horizontal bg-base-200 rounded-box shadow-md px-4">
          <a href="#projects" className="btn btn-ghost">Projects</a>
          <a href="#skills" className="btn btn-ghost">Skills</a>
          <a href="#about" className="btn btn-ghost">About</a>
          <a href="#contact" className="btn btn-ghost">Contact</a>
          <a href="#hobby" className="btn btn-ghost">Hobby</a>
        </div>
      </div>
  </section>
  </>
  )
}

export default Home;