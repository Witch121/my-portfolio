import skyBackground from "../assets/img/sky.jpg";

function Home() {
  return <section className="hero bg-base-200 min-h-screen">

      <div
          className="hero min-h-screen skyBackground"
          style={{
            backgroundImage:
              "url(" + skyBackground + ")",
          }}
        >

        <div>
            <label className="flex cursor-pointer gap-2">
              <span className="label-text">Forest</span>
              <input type="checkbox" value="valentine" className="toggle theme-controller" />
              <span className="label-text">Valentine</span>
            </label>
          <h1 className="text-5xl font-bold">Personal Portfolio</h1>
          <p className="py-6">
            This is a personal portfolio website built with React, TypeScript,
            DaisyUI, and Tailwind CSS.
          </p>
          <div className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
            <a href="#projects" className="btn btn-ghost">Projects</a>
            <a href="#skills" className="btn btn-ghost">Skills</a>
            <a href="#about" className="btn btn-ghost">About</a>
            <a href="#contact" className="btn btn-ghost">Contact</a>
            <a href="#hobby" className="btn btn-ghost">Hobby</a>
          </div>
        </div>
      </div>
  </section>;
}

export default Home;