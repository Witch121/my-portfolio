import reactLogo from "../assets/logos/react.png";
import bootstrapLogo from "../assets/logos/bootstrap.png";
import tailwindLogo from "../assets/logos/tailwind.png";
import gitLogo from "../assets/logos/git.png";
import jsLogo from "../assets/logos/vscode-js.png";
import typeScriptLogo from "../assets/logos/typescript.png";
import nodeLogo from "../assets/logos/nodejs.png";
import netLogo from "../assets/logos/Microsoft_.NET_logo.png";
import playwriteLogo from "../assets/logos/playwright.png";
import expressLogo from "../assets/logos/express.png";
import firebaseLogo from "../assets/logos/firebase.png";
import mangoDBLogo from "../assets/logos/MongoDB-Logo.png";

function Skills() {
  return (
    <>
    <div className="flex w-full flex-col no-background" id="skills">
      <div className="grid h-20 place-items-center">
          <div className="title">
            <h1 className="text-5xl font-bold">Skills</h1>
          </div>
      </div>
    </div>

    <div className="overflow-x-auto">
      <table className="table w-full ">
        <thead>
          <tr>
            <th className="text-4xl tracking-tighter text-balance text-center"> Front End</th>
            <th className="text-4xl tracking-tighter text-balance text-center"> Back End</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>            
              <div className="stat"  id="reactLogo">
                <div className="stat-figure text-secondary">
                  <div className="avatar online">
                    <div className="w-16 rounded">
                      <img src={reactLogo} />
                    </div>
                  </div>
                </div>
              <div className="stat-value">React</div>
            </div>
            </th>
            <td>
              <div className="stat"  id="NODE_Logo">
                <div className="stat-figure text-secondary">
                  <div className="avatar online">
                    <div className="w-16 rounded">
                      <img src={nodeLogo} />
                    </div>
                  </div>
                </div>
                <div className="stat-value">Node.js</div>
              </div>
            </td>


          </tr>
          {/* row 2 */}
          <tr>
            <td>
            <div className="stat" id="jsLogo">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded">
                    <img src={jsLogo}/>
                  </div>
                </div>
              </div>
              <div className="stat-value">JavaScript</div>
            </div>
            </td>
            <td>
              <div className="stat" id="NET_Logo">
                <div className="stat-figure text-secondary">
                  <div className="avatar online">
                    <div className="w-16 rounded">
                      <img src={netLogo} />
                    </div>
                  </div>
                </div>
              <div className="stat-value">.Net</div>
            </div>
            </td>

          </tr>
          {/* row 3 */}
          <tr>
            <td>
             <div className="stat" id="typeScriptLogo">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded">
                    <img src={typeScriptLogo} />
                  </div>
                </div>
              </div>
              <div className="stat-value">TypeScript</div>
            </div>
            </td>
            <td>
              <div className="stat" id="express_Logo">
                <div className="stat-figure text-secondary">
                  <div className="avatar online">
                    <div className="w-16 rounded">
                      <img src={expressLogo} />
                    </div>
                  </div>
                </div>
              <div className="stat-value">Express.js</div>
            </div>
            </td>
          </tr>
          {/* row 4 */}
          <tr>
            <td>
              <div className="stat" id="bootstrapLogo">
                <div className="stat-figure text-secondary">
                  <div className="avatar online">
                    <div className="w-16 rounded">
                      <img src={bootstrapLogo}/>
                    </div>
                  </div>
                </div>
              <div className="stat-value">Bootstrap</div>
            </div>
            </td>
            <td>
              <div className="stat" id="firebaseLogo">
                <div className="stat-figure text-secondary">
                  <div className="avatar online">
                    <div className="w-16 rounded">
                      <img src={firebaseLogo}/>
                    </div>
                  </div>
                </div>
              <div className="stat-value">Firebase</div>
            </div>
            </td>
          </tr>
          {/* row 5 */}
          <tr>
            <td>
              <div className="stat" id="tailwindLogo">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded">
                    <img src={tailwindLogo} />
                  </div>
                </div>
              </div>
              <div className="stat-value">Tailwind</div>
            </div>
            </td>
            <td>
              <div className="stat" id="mangoDBLogo">
                <div className="stat-figure text-secondary">
                  <div className="avatar online">
                    <div className="w-16 rounded">
                      <img src={mangoDBLogo} />
                    </div>
                  </div>
                </div>
                <div className="stat-value">MongoDB</div>
              </div>
            </td>
          </tr>
          {/* row 6 */}
          <tr>
            <td className="stat-value" rowSpan={2}> Additional Skills</td>
            <td>
              <div className="stat" id="PLAYWRIGHT_Logo">
                <div className="stat-figure text-secondary">
                  <div className="avatar online">
                    <div className="w-16 rounded">
                      <img src={playwriteLogo}/>
                    </div>
                  </div>
                </div>
                <div className="stat-value">Playwright </div>
              </div>
            </td>
          </tr>
          {/* row 7 */}
          <tr>
            <td>
              <div className="stat" id="gitLogo">
                <div className="stat-figure text-secondary">
                  <div className="avatar online">
                    <div className="w-16 rounded">
                      <img src={gitLogo} />
                    </div>
                  </div>
                </div>
                <div className="stat-value">Git</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
}
export default Skills;