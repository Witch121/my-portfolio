import reactLogo from "../assets/logos/react.png";
import bootstrapLogo from "../assets/logos/bootstrap.png";
import tailwindLogo from "../assets/logos/tailwind.png";
import gitLogo from "../assets/logos/git.png";
import jsLogo from "../assets/logos/vscode-js.png";
import typeScriptLogo from "../assets/logos/typescript.png";

function Skills() {
  return (
    <>
    <div className="flex w-full flex-col no-background">
      <div className="grid h-20 place-items-center">
          <div className="title">
            <h1 className="text-5xl font-bold">Skills</h1>
          </div>
      </div>

      <div className="divider divider-secondary divider-custom"></div>

      <div className="grid place-items-center">

        <div className="stats shadow">

            <div className="stat"  id="reactLogo">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img src={reactLogo} />
                  </div>
                </div>
              </div>
              <div className="stat-value">React</div>
              <div className="stat-title">Tasks done</div>
              <div className="stat-desc text-secondary">31 tasks remaining</div>
            </div>

            <div className="stat" id="tailwindLogo">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img src={tailwindLogo} />
                  </div>
                </div>
              </div>
              <div className="stat-value">Tailwind</div>
              <div className="stat-title">Tasks done</div>
              <div className="stat-desc text-secondary">31 tasks remaining</div>
            </div>

            <div className="stat" id="bootstrapLogo">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img src={bootstrapLogo}/>
                  </div>
                </div>
              </div>
              <div className="stat-value">Bootstrap</div>
              <div className="stat-title">Tasks done</div>
              <div className="stat-desc text-secondary">31 tasks remaining</div>
            </div>

          </div>
      </div>

      <div className="grid place-items-center">

        <div className="stats shadow">

            <div className="stat" id="typeScriptLogo">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img src={typeScriptLogo} />
                  </div>
                </div>
              </div>
              <div className="stat-value">React</div>
              <div className="stat-title">Tasks done</div>
              <div className="stat-desc text-secondary">31 tasks remaining</div>
            </div>

            <div className="stat" id="gitLogo">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img src={gitLogo} />
                  </div>
                </div>
              </div>
              <div className="stat-value">Tailwind</div>
              <div className="stat-title">Tasks done</div>
              <div className="stat-desc text-secondary">31 tasks remaining</div>
            </div>

            <div className="stat" id="jsLogo">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img src={jsLogo}/>
                  </div>
                </div>
              </div>
              <div className="stat-value">Bootstrap</div>
              <div className="stat-title">Tasks done</div>
              <div className="stat-desc text-secondary">31 tasks remaining</div>
            </div>

          </div>
      </div>
    </div>
    </>
  );
}
export default Skills;